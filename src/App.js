import React, { useState } from "react";
import "./App.css";
import Home from "./MovieApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from "./MovieApp/Favorites";
import DefaultLayout from "./Layouts/DefaultLayout";
import LoginForm from "./MovieApp/auth/LoginForm";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout  />}>
          <Route path="/" element={<Home  />} />
          <Route
            path="/favorites"
            element={<Favorites />}
          />
         
        </Route> 
        <Route path="/login" element={<LoginForm />}/>
      </Routes>
    </BrowserRouter>
  );
}
