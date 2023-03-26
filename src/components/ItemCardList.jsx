import { ItemCard } from "./ItemCard";
import { getAll } from "./AdditemsImagePage"

export const ItemCardList = (props) => {
  const { items } = props;

  return (
    <ul class="grid grid-cols-2 md:grid-cols-4 gap-5">
      {items.map((item) => <ItemCard item={item} />)}
    </ul>
  );

  // {items.map((item) => (
  //     <div key={item.id}>{item.season}</div>
  //   ))}

  // const Items = [
  //   {id:"", category1:"", category2:"", color:"", season:"", img:"https://firebasestorage.googleapis.com/v0/b/style-buddy-fb16a.appspot.com/o/image%2Fblouse_white.jpeg?alt=media&token=a996b4ac-500e-46d1-803e-8a6d0c4bbee0"},
  //   {id:"", category1:"", category2:"", color:"", season:"", img:"https://firebasestorage.googleapis.com/v0/b/style-buddy-fb16a.appspot.com/o/image%2Fsweater_blue.jpeg?alt=media&token=13440aeb-4680-403d-b62a-4582d37894c6"},
  //   {id:"", category1:"", category2:"", color:"", season:"", img:"https://source.unsplash.com/a-QH9MAAVNI"},
  //   {id:"", category1:"", category2:"", color:"", season:"", img:"https://source.unsplash.com/164_6wVEHfI"},
  //   {id:"", category1:"", category2:"", color:"", season:"", img:"https://source.unsplash.com/PqbL_mxmaUE"},
  // ];

};