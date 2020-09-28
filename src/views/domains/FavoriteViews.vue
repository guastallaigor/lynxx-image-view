<template>
  <section class="favorite-views">
    <h1>See some of our favorite views</h1>
    <div class="container">
      <div class="grid">
        <div v-for="image in favoriteViews" :key="image.id">
          <ImageCard min-height-auto :id="image.id" :src="image.link" :caption="image.name" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { Getter } from "vuex-class";

import { Image } from "@/interfaces/interfaces";
import ImageCard from "@/components/ImageCard.vue";
import ImageInitializer from "@/mixins/image-initializer";

@Component({
  components: {
    ImageCard
  }
})
export default class FavoriteViews extends Mixins(ImageInitializer) {
  @Getter("favoriteViews")
  private favoriteViews!: Image[];
}
</script>

<style lang="scss" scoped>
.favorite-views {
  h1 {
    margin: 20px;
    font-family: Eina01, sans-serif;
    font-size: 60px;
    font-weight: 700;
    text-align: center;

    @include sm-and-down-alternative() {
      font-size: 30px;
    }
  }

  .container {
    max-width: 1440px;
    margin: 60px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: $white solid 3px;

    @include md-and-down() {
      max-width: 100%;
    }

    @include md() {
      margin: 60px;
    }

    @include sm() {
      margin: 30px;
    }

    @include xs() {
      margin: 0;
    }

    .grid {
      display: grid;
      column-gap: 20px;
      row-gap: 20px;
      grid-template-columns: repeat(2, 1fr);
      margin: 0 20px;

      @include sm-and-down-alternative() {
        margin: 0;
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
