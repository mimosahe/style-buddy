import '../index.css';
import { Modal } from "./ItemCardModal";



export const ItemCard = (props) => {
    return (
      <li class="px-4 py-4 shadow-lg shadow-gray-300 rounded-2xl">
        <a href="#">
          <div class="mt-3">
            <img
              src={props.img}
              class="w-full aspect-square object-cover rounded-2xl"
              alt="sample"
            />
            <Modal />
          </div>
        </a>
      </li> 
    );
  };