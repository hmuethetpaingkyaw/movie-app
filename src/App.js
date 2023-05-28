import React, { useState } from "react";
import "./App.css";
import Home from "./MovieApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from "./MovieApp/Favorites";
import DefaultLayout from "./Layouts/DefaultLayout";
import LoginForm from "./MovieApp/auth/LoginForm";

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
        <Route path="/login" element={<LoginForm />}/>
      </Routes>
    </BrowserRouter>
  );
}
