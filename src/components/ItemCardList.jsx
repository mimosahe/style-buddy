import { ItemCard } from "./ItemCard";

export const ItemCardList = (props) => {
  const { items } = props;

  return (
    <ul class="grid grid-cols-2 md:grid-cols-4 gap-5">
      {items.map((item) => <ItemCard item={item} />)}
    </ul>
  );
};