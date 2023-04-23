import { createContext, useEffect, useState } from "react";
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

export const searchContext = createContext();
export const filterContext = createContext();
export const filterValuesContext = createContext();
export const currentItemContext = createContext();

function App() {
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
    <currentItemContext.Provider value={getCurrentItem}>
      <filterContext.Provider value={getFilter}>
        <filterValuesContext.Provider value={getFilterValues}>
          <searchContext.Provider value={searchText}>
            <ScrollToTop />
            <div className="bg-gray-900 min-h-screen ">
              <Filter
                setGetFilter={setGetFilter}
                setGetFilterValues={setGetFilterValues}
              />
              <Header homePageRef={homePageRef} setSearchText={setSearchText} />
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
                <Route path="/mycart" element={<MyCart />} />
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
  );
}

export default App;
