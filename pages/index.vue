<template>
  <div class="relative min-h-screen bg-white font-montserrat md:flex">
    <NavigationComponent />
    <div
      class="container relative grid flex-1 w-full min-h-screen grid-cols-1 gap-1 p-10 mx-auto my-8 text-white md:grid-cols-2 lg:my-20 lg:grid-cols-3 lg:gap-2"
    >
      <NuxtLink
        :to="localePath('/portfolio/day-one')"
        class="relative transition duration-300 ease-in-out bg-center bg-cover dias-moove bg-dia-1 from-black to-gray-800 hover:rotate-3 hover:bg-gradient-to-br lg:hover:rotate-6"
      >
        <div class="absolute inset-0 bg-gray-900 bg-opacity-25"></div>
        <div class="relative flex flex-col items-start h-full">
          <h2
            class="px-4 py-4 text-3xl font-bold leading-normal tracking-wider text-white uppercase"
          >
            DÍA<span class="text-xl ubuntu">1</span>
          </h2>
          <p
            class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"
          >
            2021
          </p>
        </div>
      </NuxtLink>

      <NuxtLink
        :to="localePath('/portfolio/day-two')"
        class="relative transition duration-300 ease-in-out transform bg-center bg-cover dias-moove bg-dia-2 from-red-600 to-redjuli hover:rotate-3 hover:bg-gradient-to-br lg:hover:rotate-6"
      >
        <div class="absolute inset-0 bg-red-600 bg-opacity-25"></div>
        <div class="relative flex flex-col items-start h-full">
          <h2
            class="px-4 py-4 text-3xl font-bold leading-normal tracking-wider text-white uppercase"
          >
            DÍA<span class="text-xl ubuntu">2</span>
          </h2>
          <p
            class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"
          >
            2020
          </p>
        </div>
      </NuxtLink>

      <NuxtLink
        :to="localePath('/portfolio/day-three')"
        class="relative transition duration-300 ease-in-out transform bg-center bg-cover dias-moove bg-dia-3 from-blue-500 to-bluejuli hover:rotate-3 hover:bg-gradient-to-br lg:hover:rotate-6"
      >
        <div class="absolute inset-0 bg-blue-900 bg-opacity-25"></div>
        <div class="relative flex flex-col items-start h-full">
          <h2
            class="px-4 py-4 text-3xl font-bold leading-normal tracking-wider text-white uppercase"
          >
            DÍA<span class="text-xl ubuntu">3</span>
          </h2>
          <p
            class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"
          >
            2021
          </p>
        </div>
      </NuxtLink>

      <NuxtLink
        :to="localePath('/portfolio/day-four')"
        class="relative transition duration-300 ease-in-out transform bg-center bg-cover dias-moove bg-dia-4 from-yellow-500 to-yellowjuli hover:rotate-3 hover:bg-gradient-to-br lg:hover:rotate-6"
      >
        <div class="absolute inset-0 bg-opacity-25 bg-yellowjuli"></div>
        <div class="relative flex flex-col items-start h-full">
          <h2
            class="px-4 py-4 text-3xl font-bold leading-normal tracking-wider text-white uppercase"
          >
            DÍA<span class="text-xl ubuntu">4</span>
          </h2>
          <p
            class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"
          >
            2019
          </p>
        </div>
      </NuxtLink>

      <NuxtLink
        :to="localePath('/portfolio/day-five')"
        class="relative transition duration-300 ease-in-out transform bg-center bg-cover dias-moove bg-dia-5 from-gray-900 to-black hover:rotate-3 hover:bg-gradient-to-br lg:hover:rotate-6"
      >
        <div class="absolute inset-0 bg-gray-800 bg-opacity-25"></div>
        <div class="relative flex flex-col items-start h-full">
          <h2
            class="px-4 py-4 text-3xl font-bold leading-normal tracking-wider text-white uppercase"
          >
            DÍA<span class="text-xl ubuntu">5</span>
          </h2>
          <p
            class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"
          >
            2020
          </p>
        </div>
      </NuxtLink>

      <NuxtLink
        :to="localePath('/portfolio/day-six')"
        class="relative transition duration-300 ease-in-out transform bg-center bg-cover dias-moove bg-dia-6 from-blue-500 to-bluejuli hover:rotate-3 hover:bg-gradient-to-br lg:hover:rotate-6"
      >
        <div class="absolute inset-0 bg-blue-800 bg-opacity-25"></div>
        <div class="relative flex flex-col items-start h-full">
          <h2
            class="px-4 py-4 text-3xl font-bold leading-normal tracking-wider text-white uppercase"
          >
            DÍA<span class="text-xl ubuntu">6</span>
          </h2>
          <p
            class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"
          >
            2018
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import NavigationComponent from '~/components/NavigationComponent.vue'
export default {
  components: { NavigationComponent },
}
</script>
