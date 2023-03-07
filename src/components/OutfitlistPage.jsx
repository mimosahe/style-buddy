import React from "react";
import { ItemCardList } from "./ItemCardList";
import { Footer } from "./Footer";

export const OutfitlistPage = () => {

    return (
        <>
        <h1>組合せ一覧画面</h1>
        <div className="App container mx-auto">
            <h1>組合せ一覧</h1>
            <div className="mt-6">
                <ItemCardList />
            </div>
        </div>
        <Footer />
        </>
    );
};