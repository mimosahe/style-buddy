import React from "react";
import topsImg from "../img/tops.png";
import bottomsImg from "../img/bottoms.png";
import shoesImg from "../img/shoes.png";
import { Weather } from "./Weather";

export const TodayPage = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = today.getDay();
    const dayname = ['日','月','火','水','木','金','土'];

    return (
        <>
        <h1>Today画面</h1>
        {/*日付*/}
        <div>{month}月{date}日（{dayname[day]}）</div>
        {/*天気、気温　※APIで現在地の天気を取得*/}
        <Weather />
        <div class="flex flex-col">
            <img src={topsImg} alt="topsImage"/>
            <img src={bottomsImg} alt="bottomsImage"/>
            <img src={shoesImg} alt="shoesImage"/>
        </div>
        </>
    );
};