import { Card } from "./Card";


export const CardList = () => {
  return (
    <ul class="grid grid-cols-2 md:grid-cols-4 gap-5">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ul>
  );
};
