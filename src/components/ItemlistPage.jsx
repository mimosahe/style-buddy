import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

import { ItemCardList } from "./ItemCardList";
import { CategoryButtonList } from "./CategoryButtonList";
import { categoryList } from "./const.jsx";

export const ItemlistPage = (props) => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const onClickBack = () => navigate(-1);
    const [items, setItems] = useState([]);
    
    const search = useLocation().search;
    const query = new URLSearchParams(search);
    const category = query.get('category')
    console.log(category);

    async function getAllItems() {
    // ボタンを押したカテゴリのデータのみ表示させたい
    if (category == "tops"){
        // URLパラメータが"tops"だったら
        const categoryName = categoryList.filter(categoryList => {
            return categoryList.id !== "tops"
        });
        console.log(categoryName);
        // "category1"=="トップス"のデータのみ抽出する
        const q = query(collection(db, "items"), where("category1", "==", categoryName));
        const data = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        setItems(data);
    }
        // もともとのコード
        // const querySnapshot = await getDocs(collection(db, "items"));
        // const data = [];
        // querySnapshot.forEach((doc) => {
        //     data.push(doc.data());
        // });
        // setItems(data);
    }

    useEffect(() => {
      getAllItems();
    }, [])

    return (
        <>
        <div class="md:h-full">
            <button onClick={onClickBack}>戻る</button>
            <div className="App container mx-auto">
                <div className="mt-6">
                    <CategoryButtonList />
                </div>
            </div>
            <div className="App container mx-auto">
                <div className="mt-6">
                    <ItemCardList
                        items = {items}
                    />
                </div>
            </div>
        </div>
        </>
    );
};