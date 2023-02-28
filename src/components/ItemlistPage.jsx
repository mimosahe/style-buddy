import React from "react";
import { CardList } from "./CardList";
import { CircleList } from "./CircleList";

export const ItemlistPage = () => {

    return (
        <>
        <h1>アイテム一覧画面</h1>
        <div className="App container mx-auto">
            <h1>カテゴリを選ぶ場所</h1>
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
        </>
    );
};