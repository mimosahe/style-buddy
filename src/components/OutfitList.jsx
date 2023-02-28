import React from "react";
import { CardList } from "./CardList";

export const OutfitListPage = () => {

    return (
        <>
        <h1>組合せ一覧画面</h1>
        <div className="App container mx-auto">
            <h1>組合せ一覧</h1>
            <div className="mt-6">
                <CardList />
            </div>
        </div>
        </>
    );
};