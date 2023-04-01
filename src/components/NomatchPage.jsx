import { Link } from "react-router-dom";
import styleBuddy_favicon from "../img/styleBuddy_favicon.png";

export const NomatchPage = () => {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-lg px-4 md:px-8">
        <div class="grid gap-8 sm:grid-cols-2">
          {/*  content - start  */}
          <div class="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
            <p class="mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-base">Error 404</p>
            <h1 class="mb-2 text-center text-2xl font-bold text-gray-800 sm:text-left md:text-3xl">Page not found</h1>

            <p class="mb-8 text-center text-gray-500 sm:text-left md:text-lg">The page you’re looking for doesn’t exist.</p>

            <Link to="today" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">TOPに戻る</Link>
            {/* <a href="#" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Go home</a> */}
          </div>
          {/*  content - end  */}

          {/*  image - start  */}
          <div class="relative h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
            <img src={styleBuddy_favicon} loading="lazy" alt="Photo by @heydevn" class="absolute inset-0 h-full w-full object-cover object-center" />
          </div>
          {/*  image - end  */}
        </div>
      </div>
    </div>
  );
};


