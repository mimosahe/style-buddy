import React from "react";
import topsImg from "../img/tops.png";
import bottomsImg from "../img/bottoms.png";
import shoesImg from "../img/shoes.png";
import { Weather } from "./Weather";
import { useNavigate } from "react-router-dom";

export const TodayPage = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = today.getDay();
    const dayname = ['日','月','火','水','木','金','土'];
    const navigate = useNavigate()

    return (
        <>
        <div>
            {/*日付*/}
            <div>{month}月{date}日（{dayname[day]}）</div>
            {/*天気、気温　※APIで現在地の天気を取得*/}
            <Weather />
            <div class="flex flex-col">
                <div class="w-1/3 rounded border border-slate-500 p-3 border-dotted flex justify-center items-center hover:translate-y-0.5 transform transition"
                onClick={() => navigate('/Itemlist')}>
                    <img src={topsImg} alt="topsImage"/>
                </div>
                <div class="w-1/3 rounded border border-slate-500 p-3 border-dotted flex justify-center items-center">
                    <img src={bottomsImg} alt="bottomsImage"/>
                </div>
                <div class="w-1/3 rounded border border-slate-500 p-3 border-dotted flex justify-center items-center">
                    <img src={shoesImg} alt="shoesImage"/>
                </div>
            </div>
        </div>
        </>
    );
};