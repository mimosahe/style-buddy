import { CategoryButton } from "./CategoryButton";
import { categoryList } from "./const";

export const CategoryButtonList = () => {
  return (
    <ul class="grid grid-cols-4 md:grid-cols-8 gap-1">
        {categoryList.map((category) =>
          <CategoryButton category1Name={category.name} category1Id={category.id}/>
        )}
    </ul>
  );
};