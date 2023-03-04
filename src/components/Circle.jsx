import React from "react"
import '../index.css';

export const Circle = (props) => {
    return (
    <div class="m-0">
        <button class="w-20 h-20  bg-blue-400 text-lg text-white font-semibold rounded-full hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition">{props.category1}</button>
    </div>
    );
  };