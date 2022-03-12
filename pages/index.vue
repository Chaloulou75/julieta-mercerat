<template>
  <div class="relative min-h-screen bg-white font-montserrat md:flex">
    <NavigationComponent />
    <div class="my-4 flex flex-1 flex-col">
      <div class="mx-auto px-10">
        <h3 class="my-3 px-4 font-semibold">Categories</h3>
        <select
          class="space-y-1 px-4 py-2.5 focus:outline-none"
          v-model="category"
        >
          <option value="" class="focus:outline-none" selected>#All</option>
          <option value="#Fashion Design" class="focus:outline-none">
            #Fashion Design
          </option>
          <option value="#Textile Design" class="focus:outline-none">
            #Textile Design
          </option>
          <option value="#Sustainability" class="focus:outline-none">
            #Sustainability
          </option>
          <option value="#Trend Reports" class="focus:outline-none">
            #Trend Reports
          </option>
        </select>
      </div>
      <div
        class="container relative mx-auto my-8 grid min-h-full w-full flex-1 auto-cols-auto grid-cols-1 gap-2 p-10 text-white md:grid-cols-2 lg:grid-cols-3 lg:gap-4"
      >
        <NuxtLink
          v-for="(work, index) in filterWorksByCategory"
          :key="index"
          :to="localePath(work.url)"
          class="dias-moove relative max-h-72 bg-cover bg-center transition duration-300 ease-in-out hover:rotate-3 hover:bg-gradient-to-br lg:hover:rotate-6"
          :class="work.background"
        >
          <div
            class="absolute inset-0 bg-opacity-25"
            :class="work.background2"
          ></div>
          <div class="relative flex h-full flex-col items-start font-ubuntu">
            <h2
              class="px-4 py-4 text-3xl font-bold uppercase leading-normal tracking-wider text-white"
            >
              DÍA<span class="text-xl">{{ work.name }}</span>
            </h2>
            <p
              class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"
            >
              {{ work.year }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationComponent from '~/components/NavigationComponent.vue'
export default {
  components: { NavigationComponent },
  data() {
    return {
      category: [],
      works: [
        {
          name: '1',
          year: '2021',
          url: '/portfolio/day-one',
          category: ['#Fashion Design', '#Textile Design'],
          background: 'bg-dia-1 from-black to-gray-800',
          background2: 'bg-gray-900',
        },
        {
          name: '2',
          year: '2020',
          url: '/portfolio/day-two',
          category: ['#Trend Reports'],
          background: 'bg-dia-2 from-red-600 to-redjuli',
          background2: 'bg-gray-900',
        },
        {
          name: '3',
          year: '2021',
          url: '/portfolio/day-three',
          category: ['#Fashion Design', '#Sustainability'],
          background: 'bg-dia-3 from-blue-500 to-bluejuli',
          background2: 'bg-blue-900',
        },
        {
          name: '4',
          year: '2019',
          url: '/portfolio/day-four',
          category: ['#Textile Design', '#Trend Reports'],
          background: 'bg-dia-4 from-yellow-500 to-yellowjuli',
          background2: 'bg-yellowjuli',
        },
        {
          name: '5',
          year: '2020',
          url: '/portfolio/day-five',
          category: ['#Sustainability', '#Trend Reports'],
          background: 'bg-dia-5 from-gray-900 to-black',
          background2: 'bg-gray-800',
        },
        {
          name: '6',
          year: '2018',
          url: '/portfolio/day-six',
          category: ['#Textile Design', '#Sustainability'],
          background: 'bg-dia-6 from-blue-500 to-bluejuli',
          background2: 'bg-blue-800',
        },
      ],
    }
  },
  computed: {
    filterWorksByCategory: function () {
      if (this.category == '') {
        return this.works.filter(
          (work) => !work.category.includes(this.category)
        )
      } else {
        return this.works.filter((work) =>
          work.category.includes(this.category)
        )
      }
    },
  },
}
</script>
