import { Circle } from "./Circle";


export const CircleList = () => {
  return (
    <ul class="grid grid-cols-4 md:grid-cols-8 gap-1">
      <Circle category1="トップス" />
      <Circle category1="ボトムス" />
      <Circle category1="靴" />
      <Circle category1="アウター" />
      <Circle category1="バッグ" />
      <Circle category1="帽子" />
    </ul>
  );
};
