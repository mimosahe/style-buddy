import { CategoryButton } from "./CategoryButton";
import { categoryList } from "./const";

export const CategoryButtonList = () => {
  return (
    <ul class="grid grid-cols-4 md:grid-cols-8 gap-1">
        {/* {category1NameArr.map((name) => <CategoryButton category1Name={name} />)} */}
        {categoryList.map((category) =>
          <CategoryButton category1Name={category}/>
        )}
    </ul>
  );
};
