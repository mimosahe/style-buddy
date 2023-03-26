import React from 'react';

import '../index.css';

export const CategoryButton = (props) => {
    const onClickCategoryButton = () => {
        // カテゴリボタンを押したら、該当カテゴリのデータのみItemCardListに表示する
        
        // カテゴリボタンを押したら、押したボタンに装飾つける

    };
    
    return (
    <div class="m-0">
        <a
        className="w-20 h-20  bg-blue-400 text-lg text-white font-semibold rounded-full hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition"
        href={'/Itemlist?category=' + props.category1Id}
        onClick={onClickCategoryButton}>
        {props.category1Name}
        </a>
    </div>
    );
  };