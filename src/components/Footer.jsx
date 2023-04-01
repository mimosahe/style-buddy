import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faSun, faTShirt } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
    const navigate = useNavigate();

    return (
        <>
        <div class="absolute bottom-0 bg-white pt-12 sm:pt-16 lg:pt-24">
        {/* nav - start */}
        <nav class="sticky bottom-0 mx-auto flex w-full justify-between gap-8 border-t bg-white px-10 py-4 text-xs sm:max-w-md sm:rounded-t-xl sm:border-transparent sm:text-sm sm:shadow-2xl">
            <div class="flex flex-col items-center gap-1 text-indigo-500" onClick={()=> navigate('/')}>
            <FontAwesomeIcon icon={faSun} />
            <span>Today</span>
            </div>

            <a href="additems" class="flex flex-col items-center gap-1 text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <FontAwesomeIcon icon={faPlusCircle} />
            <span>Add Items</span>
            </a>

            <a href="itemlist?category=tops" class="flex flex-col items-center gap-1 text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <FontAwesomeIcon icon={faTShirt} />
            <span>Item List</span>
            </a>
        </nav>
        {/* nav - end */}
        </div>
        </>
    );
};