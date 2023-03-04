import React from "react";

export const Footer = () => {
    return (
        <div class="bg-white">
            <nav class="flex flex-col sm:flex-row">
                <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
                    Today
                </button><button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                    Calendar
                </button><button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                    Add Items
                </button><button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                    Closet
                </button><button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                    Settings
                </button>
            </nav>
        </div>
    );
};