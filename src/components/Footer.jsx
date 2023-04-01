import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faSun, faTShirt } from "@fortawesome/free-solid-svg-icons";
import '../index.css';

export const Footer = () => {
    // const navigate = useNavigate();
    const [active, setActive] = useState("today");

    return (
        <>
        <div class="absolute bottom-0 bg-white pt-12 sm:pt-16 lg:pt-24">
        {/* nav - start */}
        <nav class="sticky bottom-0 mx-auto flex w-full justify-between gap-8 border-t bg-white px-10 py-4 text-xs sm:max-w-md sm:rounded-t-xl sm:border-transparent sm:text-sm sm:shadow-2xl">
            {/* <div class="flex flex-col items-center gap-1 text-indigo-500" onClick={()=> navigate('/')}> */}
            {/* <div className="active" onClick={()=> navigate('/')}> */}
            <div className={`${active === "today" ? "active" : "inactive"} ${"linkbox"}`} onClick={() => setActive('today')}>
            <FontAwesomeIcon icon={faSun} />
            <span>Today</span>
            <a href="/"></a>
            {/* </div> */}
            </div>

            {/* <a href="additems" class="flex flex-col items-center gap-1 text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"> */}
            <div className={`${active === "addItems" ? "active" : "inactive"} ${"linkbox"}`} onClick={() => setActive('addItems')}>
            <FontAwesomeIcon icon={faPlusCircle} />
            <span>Add Items</span>
            <a href="additems"></a>
            </div>

            {/* <a href="itemlist?category=tops" class="flex flex-col items-center gap-1 text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"> */}
            <div className={`${active === "itemList" ? "active" : "inactive"} ${"linkbox"}`} onClick={() => setActive('itemList')}>
            <FontAwesomeIcon icon={faTShirt} />
            <span>Item List</span>
            <a href="itemlist?category=tops"></a>
            </div>
        </nav>
        {/* nav - end */}
        </div>
        </>
    );
};