import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../firebase";

import { ItemCardList } from "./ItemCardList";
import { CategoryButtonList } from "./CategoryButtonList";
import { Footer } from "./Footer";
import { onAuthStateChanged } from "firebase/auth";

export const ItemlistPage = (props) => {
    const [user, setUser] = useState("user");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const onClickBack = () => navigate(-1);
    const [items, setItems] = useState([]);

    const search = useLocation().search;
    const param = new URLSearchParams(search);
    const category = param.get('category')

    /* ↓ログインしているかどうかを判定する */
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
        });
    }, []);

    async function getAllItems() {
        if (category === "bottoms"){
            // URLパラメータが"tops"だったら
            // const categoryName = categoryList.filter(category => {
            //     return category.id == "tops";
            // });
            // console.log(category.name);
            // "category1"=="トップス"のデータのみ抽出する
            const q = query(collection(db, "items"), where("category1", "==", "ボトムス"));
            const data = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            setItems(data);
        } else if(category === "shoes"){
            const q = query(collection(db, "items"), where("category1", "==", "靴"));
            const data = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            setItems(data);
        } else if(category === "outer"){
            const q = query(collection(db, "items"), where("category1", "==", "アウター"));
            const data = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            setItems(data);
        } else if(category === "bag"){
            const q = query(collection(db, "items"), where("category1", "==", "バッグ"));
            const data = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            setItems(data);
        }else if(category === "hat"){
            const q = query(collection(db, "items"), where("category1", "==", "帽子"));
            const data = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            setItems(data);
        } else {
            const q = query(collection(db, "items"), where("category1", "==", "トップス"));
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
        {/* ↓ログインしていない場合はログインページにリダイレクトする設定 */}
        {!user ? (
            <Navigate to={`/signin/`} />
        ) : (
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
            <div class="flex justify-center">
            <Footer />
            </div>
            </>
            )}
        </>
    );
};