import { ItemCard } from "./ItemCard";


export const ItemCardList = () => {
  const Items = [
    {id:"", category1:"", category2:"", color:"", season:"", img:"https://source.unsplash.com/jvoZ-Aux9aw"},
    {id:"", category1:"", category2:"", color:"", season:"", img:"https://source.unsplash.com/NOpsC3nWTzY"},
    {id:"", category1:"", category2:"", color:"", season:"", img:"https://source.unsplash.com/a-QH9MAAVNI"},
    {id:"", category1:"", category2:"", color:"", season:"", img:"https://source.unsplash.com/164_6wVEHfI"},
    {id:"", category1:"", category2:"", color:"", season:"", img:"https://source.unsplash.com/PqbL_mxmaUE"},
  ];
  const ItemsImg = Items.map(function(item){return item.img});

  return (
    <ul class="grid grid-cols-2 md:grid-cols-4 gap-5">
      {ItemsImg.map((img) => <ItemCard img={img} />)}
    </ul>
  );
};
