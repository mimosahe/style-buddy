import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdditemsImagePage } from "./components/AdditemsImagePage";

import { Footer } from "./components/Footer";
import { ItemlistPage } from "./components/ItemlistPage";
import { NomatchPage } from "./components/NomatchPage";
import { TodayPage } from "./components/TodayPage";

export const App = () => {
  return (
    <div classname="App">
      <h1>Hello React Router v6</h1>
      <Routes>
        <Route path="/" element={<TodayPage />} />
        {/* <Route path="/Itemlist" element={<ItemlistPage category1Name="トップス"/>} /> */}
        <Route path="/Itemlist" element={<ItemlistPage />} />
        <Route path="/Additems" element={<AdditemsImagePage />} />
        <Route path="*" element={<NomatchPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

