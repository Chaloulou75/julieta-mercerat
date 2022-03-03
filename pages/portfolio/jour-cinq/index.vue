<template>
  <div class="flex flex-col min-h-screen">
    <div class="relative min-h-full bg-white font-montserrat md:flex">
      <NavigationComponent />
      <div
        class="container relative flex flex-col items-center justify-between flex-1 w-full mx-auto my-8 md:p-10"
      >
        <div class="w-full mx-auto mb-12">
          <nuxt-img
            src="/img/proyectos/diacinco/1.jpg"
            sizes="sm:95vw md:100vw lg:100vw"
            class="mx-auto shadow-lg shadow-sky-800/60"
          />
        </div>
        <div class="w-full px-4 mb-12 md:px-0">
          <h2 class="my-4 font-semibold">Name of the project</h2>
          <p class="mb-4">
            Descipción de trabajo, explicacion y areas en las que se desarrollo.
            Art directing, designing and developing an artist’s showcase
            website. In progress, currently desktop only. Incorporates Lottie,
            scroll, and mouse over interactions. Si es posible, poner el link
            del trabajo real.
          </p>
          <div class="flex flex-col justify-between md:flex-row">
            <div class="font-semibold">Programs</div>
            <div class="font-semibold">I took part in</div>
            <div class="font-semibold">Categorie</div>
          </div>
        </div>
        <div class="w-full space-y-12">
          <nuxt-img
            v-for="(image, index) in images"
            :key="index"
            :alt="image.name"
            :src="image.href"
            sizes="sm:95vw md:100vw lg:100vw"
            class="mx-auto shadow-lg shadow-sky-800/60"
          />
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>
<script>
import NavigationComponent from '~/components/NavigationComponent.vue'
import FooterComponent from '~/components/FooterComponent.vue'
export default {
  components: { FooterComponent, NavigationComponent },
  data() {
    return {
      images: [
        {
          id: 1,
          name: 'uno',
          href: '/img/proyectos/diacinco/1.jpg',
        },
        {
          id: 2,
          name: 'dos',
          href: '/img/proyectos/diacinco/2.jpg',
        },
        {
          id: 3,
          name: 'tres',
          href: '/img/proyectos/diacinco/3.jpg',
        },
        {
          id: 4,
          name: 'cuatro',
          href: '/img/proyectos/diacinco/4.jpg',
        },
        {
          id: 5,
          name: 'cinco',
          href: '/img/proyectos/diacinco/5.jpg',
        },
        {
          id: 6,
          name: 'seis',
          href: '/img/proyectos/diacinco/6.jpg',
        },
        {
          id: 7,
          name: 'siete',
          href: '/img/proyectos/diacinco/7.jpg',
        },
        {
          id: 8,
          name: 'ocho',
          href: '/img/proyectos/diacinco/8.jpg',
        },
        {
          id: 9,
          name: 'nueve',
          href: '/img/proyectos/diacinco/9.jpg',
        },
        {
          id: 10,
          name: 'dies',
          href: '/img/proyectos/diacinco/10.jpg',
        },
      ],
      index: null,
    }
  },
}
</script>
