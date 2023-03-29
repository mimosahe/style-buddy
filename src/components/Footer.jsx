import React from "react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate();

    return (
        <>
        <div class="bg-white">
            <nav class="flex flex-col sm:flex-row">
                <button
                class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500"
                onClick={()=> navigate('/')}>
                    Today
                </button>
                <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
                onClick={()=> navigate('/additems')}>
                    Add Items
                </button>
                <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
                onClick={()=> navigate('/itemlist')}>
                    Itemlist
                </button>
            </nav>
        </div>
        </>
    );
};