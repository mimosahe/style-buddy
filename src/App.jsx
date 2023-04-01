import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import './index.css';

import { NomatchPage } from "./components/NomatchPage";
import { SignUp } from "./components/SignUp";
import { db } from "./firebase";
import { Mypage } from "./components/MyPage";
import { SignIn } from "./components/SignIn";
import { TodayPage } from "./components/TodayPage";
import { AdditemsImagePage } from "./components/AdditemsImagePage";
import { ItemlistPage } from "./components/ItemlistPage";

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
      <Routes>
        <Route path={`/signup/`} element={<SignUp />} />
        <Route path={`/signin/`} element={<SignIn />} />
        <Route path={`/`} element={<Mypage />} />
        <Route path={`/additems/`} element={<AdditemsImagePage />} />
        <Route path={`/itemlist`} element={<ItemlistPage />} />
        <Route path="*" element={<NomatchPage />} />
      </Routes>

    </div>
  );
}

