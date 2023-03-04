import React from "react";
import { CardList } from "./CardList";
import { CircleList } from "./CircleList";
import { Footer } from "./Footer";

export const ItemlistPage = () => {

    return (
        <>
        <h1>アイテム一覧画面</h1>
        <div className="App container mx-auto">
            <div className="mt-6">
                <CircleList />
            </div>
        </div>
        <div className="App container mx-auto">
            <h1>カテゴリ名</h1>
            <div className="mt-6">
                <CardList />
            </div>
        </div>
        <Footer />
        </>
    );
};