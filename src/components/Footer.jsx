import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faSun, faTShirt } from "@fortawesome/free-solid-svg-icons";
import '../index.css';

export const Footer = () => {
    // const navigate = useNavigate();
    const [active, setActive] = useState("");

    return (
        <>
        <div class="absolute bottom-0 bg-white pt-5 sm:pt-5 lg:pt-24">
        {/* nav - start */}
        <nav class="sticky bottom-0 mx-auto flex w-full justify-between gap-8 border-t bg-white px-10 py-4 text-xs sm:max-w-md sm:rounded-t-xl sm:border-transparent sm:text-sm sm:shadow-2xl">
            <div className={`${active === "today" ? "active" : "inactive"}`} onClick={() => setActive('today')}>
            <FontAwesomeIcon icon={faSun} />
            {/* <span>Today</span> */}
            <a href="today">Today</a>
            {/* </div> */}
            </div>

            <div className={`${active === "addItems" ? "active" : "inactive"}`} onClick={() => setActive('addItems')}>
            <FontAwesomeIcon icon={faPlusCircle} />
            <a href="additems">Add Items</a>
            </div>

            <div className={`${active === "itemList" ? "active" : "inactive"}`} onClick={() => setActive('itemList')}>
            <FontAwesomeIcon icon={faTShirt} />
            <a href="itemlist?category=tops">Item List</a>
            </div>
        </nav>
        {/* nav - end */}
        </div>
        </>
    );
};