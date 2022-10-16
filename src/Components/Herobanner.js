import React from 'react';
import images from './images/hero1.jpg';
function Herobanner() {
  return (
    <>
    <section class="relative bg-white">
  <img
    class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
    src={images}
    alt="Couple on a bed with a dog"
  />

  <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

  <div class="relative py-32 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 lg:h-screen lg:items-center lg:flex">
    <div class="max-w-xl text-center sm:text-left">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
        Let us find your
        <strong class="font-extrabold text-rose-700 sm:block">
          Ecommerce Componets
        </strong>
      </h1>

      <p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
      The perfect starting point for your next project.
      </p>

      <div class="flex flex-wrap mt-8 text-center gap-4">
        <a class="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring" href="/get-started">
          Browse Components 
        </a>

        <a class="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring" href="/about">
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Herobanner;
