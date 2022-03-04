<template>
  <div>
    <div
      class="flex items-center justify-between px-4 py-2 text-gray-900 bg-white md:hidden"
    >
      <!-- logo -->
      <NuxtLink :to="localePath('/')">
        <LogoPersona class="h-10 px-4" :class="isOpen ? 'hidden' : ''" />
      </NuxtLink>

      <!-- mobile menu button -->
      <button class="p-4 focus:bg-gray-200 focus:outline-none" @click="toggle">
        <svg
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- sidebar -->
    <div
      class="absolute inset-y-0 left-0 z-30 w-64 px-2 py-6 space-y-6 text-gray-700 transition duration-200 ease-in-out bg-white sidebar bg-opacity-90 md:relative md:translate-x-0"
      :class="isOpen ? '' : '-translate-x-full'"
    >
      <!-- logo -->
      <NuxtLink :to="localePath('/')">
        <span class="sr-only">Home</span>
        <LogoPersona class="h-10 px-4" />
      </NuxtLink>

      <!-- nav -->
      <nav>
        <NuxtLink
          :to="localePath('/')"
          class="block rounded py-2.5 px-4 uppercase transition duration-200 hover:bg-blue-700 hover:text-white"
        >
          Portfolio
        </NuxtLink>
        <NuxtLink
          :to="localePath('/about')"
          class="block rounded py-2.5 px-4 uppercase transition duration-200 hover:bg-blue-700 hover:text-white"
        >
          {{ $t('about') }}
        </NuxtLink>
        <div class="flex divide-x-2">
          <NuxtLink
            :to="switchLocalePath('en')"
            class="mr-0.5 block rounded py-2.5 px-4 uppercase transition duration-200 hover:bg-blue-700 hover:text-white"
            >En</NuxtLink
          >
          <NuxtLink
            :to="switchLocalePath('fr')"
            class="ml-0.5 block rounded py-2.5 px-4 uppercase transition duration-200 hover:bg-blue-700 hover:text-white"
            >Fr</NuxtLink
          >
        </div>

        <a
          v-if="$i18n.locale === 'fr'"
          href="/CV_Julieta_Mercerat_FR.pdf"
          target="_blank"
          class="block rounded py-2.5 px-4 uppercase transition duration-200 hover:bg-blue-700 hover:text-white"
        >
          CV
        </a>
        <a
          v-else
          href="/CV_Julieta_Mercerat_ESP.pdf"
          target="_blank"
          class="block rounded py-2.5 px-4 uppercase transition duration-200 hover:bg-blue-700 hover:text-white"
        >
          CV ES
        </a>
      </nav>

      <div class="pt-16">
        <h3 class="px-4 my-3 font-semibold">Categories</h3>
        <ul class="space-y-1 px-4 py-2.5">
          <li class="">#Fashion Design</li>
          <li>#Textile Design</li>
          <li>#Sustainability</li>
          <li>#Trend Reports</li>
        </ul>
      </div>
      <div class="px-4 pt-10">
        <Mailto
          mail="julietamercerat@gmail.com"
          target="_blank"
          class="hover:text-gray-600"
        >
          <svg
            class="w-6 h-6 xl:h-10 xl:w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </Mailto>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
