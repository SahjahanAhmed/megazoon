import { createContext, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Products from "./components/homepage/Products";
import HomeTop from "./components/homepage/HomeTop";

const searchContext = createContext();
function App() {
  const [homePageRef, setHomePageRef] = useState();
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  return (
    <searchContext.Provider value={searchText}>
      <div className="bg-gray-900 min-h-screen ">
        <Header homePageRef={homePageRef} setSearchText={setSearchText} />

        <Routes>
          <Route
            path="/"
            element={<Homepage setHomePageRef={setHomePageRef} />}
          />
          <Route
            path="/products/:id"
            element={
              <>
                <HomeTop />
                <Products />
              </>
            }
          />

          <Route
            path="*"
            element={
              <h1 className="text-3xl font-bold m-40">404 page not found</h1>
            }
          />
        </Routes>
        <Footer />
      </div>
    </searchContext.Provider>
  );
}

export default App;
