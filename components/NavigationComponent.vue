<template>
  <div>
    <div
      class="flex items-center justify-between bg-white px-4 py-2 text-gray-900 md:hidden"
    >
      <!-- logo -->
      <NuxtLink
        to="/"
        class="rounded-2xl bg-gray-300 px-4 py-2 uppercase text-white"
        >logo</NuxtLink
      >

      <!-- mobile menu button -->
      <button
        class="mobile-menu-button p-4 focus:bg-gray-200 focus:outline-none"
        @click="toggle"
      >
        <svg
          class="h-5 w-5"
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
      class="sidebar absolute inset-y-0 left-0 z-30 w-64 space-y-6 bg-white bg-opacity-70 px-2 py-6 text-gray-700 transition duration-200 ease-in-out md:relative md:translate-x-0"
      :class="isOpen ? '-translate-x-full' : ''"
    >
      <!-- logo -->
      <NuxtLink
        to="/"
        class="mx-2 rounded-2xl bg-gray-300 px-4 py-2 uppercase text-white"
        >logo</NuxtLink
      >

      <!-- nav -->
      <nav>
        <NuxtLink
          to="/"
          class="block rounded py-2.5 px-4 uppercase transition duration-200 hover:bg-blue-700 hover:text-white"
        >
          Portfolio
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="block rounded py-2.5 px-4 uppercase transition duration-200 hover:bg-blue-700 hover:text-white"
        >
          About Me
        </NuxtLink>
        <NuxtLink
          to=""
          class="block rounded py-2.5 px-4 uppercase transition duration-200 hover:bg-blue-700 hover:text-white"
        >
          CV
        </NuxtLink>
      </nav>
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
