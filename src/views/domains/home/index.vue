<template>
  <section class="home">
    <div class="mb-0">
      <hero-title />
      <div class="hero-subtext w-embed">
        <p>
          The Construction Monitoring System LYNXX is a complete solution for remotely monitoring one or more
          <br class="hidden sm:block" />
          construction sites through images and live views, any time and from anywhere in the world.
          <br class="hidden sm:block" />
          <span class="bold">Check out some of the places we worked below</span>
        </p>
      </div>
    </div>
    <div class="container">
      <div class="grid">
        <div v-for="image in images" :key="image.id">
          <ImageCard :id="image.id" :src="image.link" :caption="image.name" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";

import ImageCard from "@/components/ImageCard.vue";
import ImageInitializer from "@/mixins/image-initializer";
import HeroTitle from "./HeroTitle.vue";

@Component({
  components: {
    HeroTitle,
    ImageCard
  }
})
export default class Home extends Mixins(ImageInitializer) {}
</script>

<style lang="scss" scoped>
.home {
  .container {
    max-width: 1280px;
    margin: 60px auto auto auto;
    display: block;
    border: $white solid 3px;

    @include sm-and-down-alternative() {
      margin: 0;
    }

    .grid {
      display: grid;
      column-gap: 20px;
      grid-template-columns: repeat(2, 1fr);
      margin: 0 20px;

      @include sm-and-down-alternative() {
        margin: 0;
        grid-template-columns: 1fr;
      }
    }
  }

  .hero-subtext {
    margin: 20px;
    font-size: 18px;
    line-height: 28px;
    text-align: center;

    p {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 18px;
      line-height: 32px;
    }
  }

  @include sm-and-up() {
    .sm\:block {
      display: block;
    }
  }
}
</style>
