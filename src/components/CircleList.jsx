import { Circle } from "./Circle";


export const CircleList = () => {
  return (
    <ul class="grid grid-cols-2 md:grid-cols-4 gap-5">
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
    </ul>
  );
};
