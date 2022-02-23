<template>
  <div class="relative min-h-screen bg-white font-montserrat md:flex">
    <NavigationComponent />
    <div
      class="container relative mx-auto my-8 grid min-h-screen w-full flex-1 grid-cols-1 gap-1 p-10 text-white md:grid-cols-2 lg:my-20 lg:grid-cols-3 lg:gap-2"
    >
      <NuxtLink
        to="/portfolio/dia-uno"
        class="dias-moove relative h-72 bg-dia-1 from-black to-gray-800 bg-cover bg-center transition duration-300 ease-in-out hover:rotate-3 hover:bg-gradient-to-br lg:hover:rotate-6"
      >
        <div class="absolute inset-0 bg-gray-900 bg-opacity-25"></div>
        <div class="relative flex h-full flex-col items-start">
          <h2
            class="px-4 py-4 text-3xl font-bold uppercase leading-normal tracking-wider text-white"
          >
            DÍA<span class="ubuntu text-xl">1</span>
          </h2>
          <p
            class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"
          >
            2021
          </p>
        </div>
      </NuxtLink>

      <NuxtLink
        to="/portfolio/dia-dos"
        class="dias-moove relative h-72 transform bg-dia-2 from-red-600 to-redjuli bg-cover bg-center transition duration-300 ease-in-out hover:rotate-3 hover:bg-gradient-to-br lg:hover:rotate-6"
      >
        <div class="absolute inset-0 bg-red-600 bg-opacity-25"></div>
        <div class="relative flex h-full flex-col items-start">
          <h2
            class="px-4 py-4 text-3xl font-bold uppercase leading-normal tracking-wider text-white"
          >
            DÍA<span class="ubuntu text-xl">2</span>
          </h2>
          <p
            class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"
          >
            2020
          </p>
        </div>
      </NuxtLink>

      <NuxtLink
        to="/portfolio/dia-tres"
        class="dias-moove relative h-72 transform bg-dia-3 from-blue-500 to-bluejuli bg-cover bg-center transition duration-300 ease-in-out hover:rotate-3 hover:bg-gradient-to-br lg:hover:rotate-6"
      >
        <div class="absolute inset-0 bg-blue-900 bg-opacity-25"></div>
        <div class="relative flex h-full flex-col items-start">
          <h2
            class="px-4 py-4 text-3xl font-bold uppercase leading-normal tracking-wider text-white"
          >
            DÍA<span class="ubuntu text-xl">3</span>
          </h2>
          <p
            class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"
          >
            2021
          </p>
        </div>
      </NuxtLink>

      <NuxtLink
        to="/portfolio/dia-cuatro"
        class="dias-moove relative h-72 transform bg-dia-4 from-yellow-500 to-yellowjuli bg-cover bg-center transition duration-300 ease-in-out hover:rotate-3 hover:bg-gradient-to-br lg:hover:rotate-6"
      >
        <div class="absolute inset-0 bg-yellowjuli bg-opacity-25"></div>
        <div class="relative flex h-full flex-col items-start">
          <h2
            class="px-4 py-4 text-3xl font-bold uppercase leading-normal tracking-wider text-white"
          >
            DÍA<span class="ubuntu text-xl">4</span>
          </h2>
          <p
            class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"
          >
            2019
          </p>
        </div>
      </NuxtLink>

      <NuxtLink
        to="/portfolio/dia-cinco"
        class="dias-moove relative h-72 transform bg-dia-5 from-gray-900 to-black bg-cover bg-center transition duration-300 ease-in-out hover:rotate-3 hover:bg-gradient-to-br lg:hover:rotate-6"
      >
        <div class="absolute inset-0 bg-gray-800 bg-opacity-25"></div>
        <div class="relative flex h-full flex-col items-start">
          <h2
            class="px-4 py-4 text-3xl font-bold uppercase leading-normal tracking-wider text-white"
          >
            DÍA<span class="ubuntu text-xl">5</span>
          </h2>
          <p
            class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"
          >
            2020
          </p>
        </div>
      </NuxtLink>

      <NuxtLink
        to="/portfolio/dia-seis"
        class="dias-moove relative h-72 transform bg-dia-6 from-blue-500 to-bluejuli bg-cover bg-center transition duration-300 ease-in-out hover:rotate-3 hover:bg-gradient-to-br lg:hover:rotate-6"
      >
        <div class="absolute inset-0 bg-blue-800 bg-opacity-25"></div>
        <div class="relative flex h-full flex-col items-start">
          <h2
            class="px-4 py-4 text-3xl font-bold uppercase leading-normal tracking-wider text-white"
          >
            DÍA<span class="ubuntu text-xl">6</span>
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
export default { components: { NavigationComponent } }
</script>
