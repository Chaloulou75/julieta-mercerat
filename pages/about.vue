<template>
  <div class="flex flex-col min-h-screen">
    <div class="relative min-h-full bg-white font-montserrat md:flex">
      <NavigationComponent />
      <div
        class="container relative flex flex-col items-center justify-between flex-1 w-full px-2 mx-auto my-8 md:flex-row md:space-x-6 md:p-10"
      >
        <div class="w-full mb-12 text-justify md:w-1/2">
          <h1 class="text-xl font-bold uppercase indent-4">julieta mercerat</h1>
          <div class="mt-10 space-y-4">
            <p class="text-base indent-4">
              {{ $t('aboutone') }}
            </p>
            <p class="text-base indent-4">
              {{ $t('abouttwo') }}
            </p>
            <p class="text-base indent-4">
              {{ $t('aboutthree') }}
            </p>
            <p class="text-base indent-4">
              {{ $t('aboutfour') }}
            </p>
          </div>

          <div class="mt-4 space-y-2">
            <p class="text-base indent-4">
              <span class="font-semibold">=></span> {{ $t('aboutfive') }}
            </p>
            <p class="text-base indent-4">
              <span class="font-semibold">=></span> {{ $t('aboutsix') }}
            </p>
            <p class="text-base indent-4">
              <span class="font-semibold">=></span> {{ $t('aboutseven') }}
            </p>
            <p class="text-base indent-4">
              <span class="font-semibold">=></span> {{ $t('aboutheight') }}
            </p>
          </div>
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
export default {
  components: { FooterComponent, NavigationComponent },
}
</script>
