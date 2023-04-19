import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  const [homePageRef, setHomePageRef] = useState();
  // console.log(homePageRef);
  return (
    <div className="bg-gray-900 min-h-screen ">
      <Header homePageRef={homePageRef} />

      <Routes>
        <Route
          path="/"
          element={<Homepage setHomePageRef={setHomePageRef} />}
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
  );
}

export default App;
