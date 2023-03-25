import { CategoryButton } from "./CategoryButton";

export const CategoryButtonList = () => {

  return (
    <ul class="grid grid-cols-4 md:grid-cols-8 gap-1">
        {/* {category1NameArr.map((name) => <CategoryButton category1Name={name} />)} */}
        <CategoryButton category1Name="トップス"/>
        <CategoryButton category1Name="ボトムス"/>
        <CategoryButton category1Name="靴"/>
        <CategoryButton category1Name="アウター"/>
        <CategoryButton category1Name="バッグ"/>
        <CategoryButton category1Name="帽子"/>
    </ul>
  );
};
