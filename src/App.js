import React from "react";
import { Route, Routes } from "react-router-dom";
import FullPage from "./Pages/FullPage";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fullpage/:id" element={<FullPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
