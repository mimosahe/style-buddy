import React from 'react';
import { useLocation } from "react-router-dom";

import '../index.css';

export const CategoryButton = (props) => {
    const search = useLocation().search;
    const query = new URLSearchParams(search);
    const category = query.get('category')

    return (
    <div className={`${category === props.category1Id ? "selected" : "unselected"}`}>
        <a
        href={'/Itemlist?category=' + props.category1Id}
        >
        {props.category1Name}
        </a>
    </div>
    );
  };