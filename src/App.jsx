import React from "react";
import { ItemlistPage } from "./components/ItemlistPage";
import { OutfitlistPage } from "./components/OutfitlistPage";
import { TodayPage } from "./components/TodayPage";


export const App = () => {
  return (
    <>
    <TodayPage />
    <ItemlistPage />
    <OutfitlistPage />
    </>
  );
}

