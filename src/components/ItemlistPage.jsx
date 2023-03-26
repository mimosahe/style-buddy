import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import { ItemCardList } from "./ItemCardList";
import { CategoryButtonList } from "./CategoryButtonList";

export const ItemlistPage = (props) => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const onClickBack = () => navigate(-1);
    const [items, setItems] = useState([]);

    async function getAllItems() {
      const querySnapshot = await getDocs(collection(db, "items"));
      const data = [];
      querySnapshot.forEach((doc) => {
          data.push(doc.data());
      });
      setItems(data);
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