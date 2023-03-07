import React, {useEffect, useState} from "react"
import '../index.css';

export const CategoryButton = (props) => {
    const [category1Name, setCategory1Name] = useState("初期値です");
    const onClickCategoryButton = () => {
        setCategory1Name(props.category1Name)
        alert(props.category1Name)
    };
    
    return (
    <div class="m-0">
        <button
        class="w-20 h-20  bg-blue-400 text-lg text-white font-semibold rounded-full hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition"
        onClick={onClickCategoryButton}>
        {props.category1Name}
        </button>
    </div>
    );
  };