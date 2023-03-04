import '../index.css';

export const Card = () => {
    return (
      <li class="px-4 py-4 shadow-lg shadow-gray-300 rounded-2xl">
        <a href="#">
          <h3>カードタイトルカードタイトル</h3>
          <div class="mt-3">
            <img
              src="https://source.unsplash.com/AqLIkOzWDAk"
              class="w-full aspect-square object-cover rounded-2xl"
              alt="sample"
            />
          </div>
        </a>
      </li> 
    );
  };