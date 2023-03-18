import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ItemCardList } from "./ItemCardList";
import { CategoryButtonList } from "./CategoryButtonList";
import { Item } from "./Item";

export const ItemlistPage = (props) => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const onClickBack = () => navigate(-1);

    return (
        <>
        <h1>アイテム一覧画面</h1>
        <button onClick={onClickBack}>戻る</button>
        <div className="App container mx-auto">
            <div className="mt-6">
                <CategoryButtonList />
            </div>
        </div>
        <div className="App container mx-auto">
            <div className="mt-6">
                <ItemCardList />
            </div>
        </div>
        {/* <div className="App container mx-auto">
            <div className="mt-6">
                <Item />
            </div>
        </div> */}
        </>
    );
};