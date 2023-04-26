import { createContext, useEffect, useState, useRef } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Products from "./components/homepage/Products";
import HomeTop from "./components/homepage/HomeTop";
import Filter from "./components/homepage/Filter";
import MyCart from "./components/MyCart";
import { useMemo } from "react";
import ScrollToTop from "./components/ScrollToTop";
import { ScrollToBottom } from "./components/ScrollToTop";
import ContactForm from "./components/footer/ContactForm";
import SignUp from "./components/account/SignUp";
import Settings from "./components/settings/Settings";

export const searchContext = createContext();
export const filterContext = createContext();
export const filterValuesContext = createContext();
export const currentItemContext = createContext();
export const cartItemsContext = createContext();

function App() {
  const [theme, setTheme] = useState("default");
  let getTheme = localStorage.getItem("theme")
    ? JSON.parse(localStorage.getItem("theme"))
    : [];
  useEffect(() => {
    if (getTheme[0].default === true) {
      setTheme("default");
    }
    if (getTheme[0].dark === true) {
      setTheme("dark");
    }
    if (getTheme[0].white === true) {
      setTheme("white");
    }
  }, []);
  const documentRef = useRef(document);
  if (theme === "dark") {
    const Document = documentRef.current.querySelectorAll(".theme");
    Array.from(Document).map((element) => {
      element.classList.add("dark");
      element.classList.remove("white");
    });
  } else if (theme === "default") {
    const Document = documentRef.current.querySelectorAll(".theme");
    Array.from(Document).map((element) => {
      element.classList.remove("dark");
      element.classList.remove("white");
    });
  } else if (theme === "white") {
    const Document = documentRef.current.querySelectorAll(".theme");
    Array.from(Document).map((element) => {
      element.classList.add("white");
      element.classList.remove("dark");
    });
  }
  const [cartItem, setCartItems] = useState(0);
  const [getCurrentItem, setGetCurrentItem] = useState("");
  const [homePageRef, setHomePageRef] = useState("");
  const [searchText, setSearchText] = useState("");
  const [getFilter, setGetFilter] = useState({});
  const [getFilterValues, setGetFilterValues] = useState({
    category: "",
    starting: 0,
    end: 10000,
  });

  return (
    <cartItemsContext.Provider value={cartItem}>
      <currentItemContext.Provider value={getCurrentItem}>
        <filterContext.Provider value={getFilter}>
          <filterValuesContext.Provider value={getFilterValues}>
            <searchContext.Provider value={searchText}>
              <ScrollToTop />

              <div className="bg-gray-900 min-h-screen theme">
                <Filter
                  setGetFilter={setGetFilter}
                  setGetFilterValues={setGetFilterValues}
                />
                <Header
                  homePageRef={homePageRef}
                  setSearchText={setSearchText}
                />
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Homepage
                        setHomePageRef={setHomePageRef}
                        setGetCurrentItem={setGetCurrentItem}
                      />
                    }
                  >
                    <Route
                      path="/products/:id"
                      element={
                        <>
                          <HomeTop />
                          <Products />
                        </>
                      }
                    />
                  </Route>
                  <Route
                    path="/mycart"
                    element={<MyCart setCartItems={setCartItems} />}
                  />
                  <Route
                    path="/contact-us"
                    element={
                      <>
                        <ScrollToBottom />
                      </>
                    }
                  />
                  <Route path="/account/:id" element={<SignUp />} />
                  <Route
                    path="/settings"
                    element={<Settings setTheme={setTheme} />}
                  />

                  <Route
                    path="*"
                    element={
                      <h1 className="text-3xl text-white min-h-100vh font-bold m-40">
                        404 page not found
                      </h1>
                    }
                  />
                </Routes>
                <Footer />
              </div>
            </searchContext.Provider>
          </filterValuesContext.Provider>
        </filterContext.Provider>
      </currentItemContext.Provider>
    </cartItemsContext.Provider>
  );
}

export default App;
