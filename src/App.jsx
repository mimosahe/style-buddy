import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AdditemsImagePage } from "./components/AdditemsImagePage";

import { Footer } from "./components/Footer";
import { ItemlistPage } from "./components/ItemlistPage";
import { NomatchPage } from "./components/NomatchPage";
import { TodayPage } from "./components/TodayPage";
import { SignUp } from "./components/SignUp";
import { db } from "./firebase";
import { Mypage } from "./components/MyPage";

export const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsCollectionRef = collection(db, 'items');
    getDocs(itemsCollectionRef).then((querySnapshot) => {
      setItems(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);
  return (
    <div classname="App" class="md:h-full">
      <SignUp />
      <Mypage />
      <Routes>
        <Route path="/" element={<TodayPage />} />
        <Route path="/Itemlist" element={<ItemlistPage />} />
        <Route path="/Additems" element={<AdditemsImagePage />} />
        <Route path="*" element={<NomatchPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

