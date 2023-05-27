import React, { useState } from "react";
import "./App.css";
import Home from "./MovieApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from "./MovieApp/Favorites";
import DefaultLayout from "./Layouts/DefaultLayout";

export default function App() {
  const [data, setData] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout setData={setData} />}>
          <Route path="/" element={<Home data={data} setData={setData} />} />
          <Route
            path="/favorites"
            element={<Favorites data={data} setData={setData} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
