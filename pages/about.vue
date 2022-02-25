<template>
  <div class="flex flex-col min-h-screen">
    <div class="relative min-h-full bg-white font-montserrat md:flex">
      <NavigationComponent />
      <div
        class="container relative flex flex-col items-center justify-between flex-1 w-full px-2 mx-auto my-8 md:flex-row md:space-x-6 md:p-10"
      >
        <div class="w-full mb-12 md:w-1/2">
          <h1 class="text-xl font-bold uppercase">julieta mercerat</h1>
          <p class="mt-10 text-lg">
            I am a passionate designer. Engaged to this incredible world of
            creation.
          </p>
          <p class="text-lg">
            Denim designer, Worked as Jeanswear Product Manager at Santista,
            during my time there we create more than 60 products / We designed
            more than 8 collections / We organized more than 10 events. As a
            professional, I am always looking for environmental responsibility.
            I am convinced that design can have a direct impact on the
            environmental footprint of the fashion industry.
          </p>
        </div>
        <div class="w-full md:w-1/2">
          <iframe
            class="w-full aspect-video"
            src="https://player.vimeo.com/video/502370696"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>
<script>
import NavigationComponent from '~/components/NavigationComponent.vue'
import FooterComponent from '~/components/FooterComponent.vue'
export default { components: { FooterComponent, NavigationComponent } }
</script>
