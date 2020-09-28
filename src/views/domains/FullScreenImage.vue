<template>
  <section class="full-screen-image expandable-image expanded">
    <button type="button" class="return-button" aria-label="Return" @click="goBack">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8l-4 4 4 4M16 12H8" />
      </svg>
    </button>
    <div :style="getStyle">
      <v-lazy-image :src="getImage.link" :alt="getImage.name" :title="getImage.name" />
      <figcaption>{{ getImage.name }}</figcaption>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import VLazyImage from "v-lazy-image";

import ImageInitializer from "@/mixins/image-initializer";
import { Image, BasicStyle } from "@/interfaces/interfaces";

@Component({
  components: {
    VLazyImage
  }
})
export default class FullScreenImage extends Mixins(ImageInitializer) {
  private id!: string;

  get getImage(): Image | undefined {
    return this.images.find((image: Image) => image.id === this.id);
  }

  get getStyle(): BasicStyle {
    return {
      maxWidth: `${this.getImage?.resolution.width}px` || "auto",
      maxHeight: "auto"
    };
  }

  created(): void {
    this.id = this.$route?.params.id;
  }

  private goBack(): void {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.expandable-image {
  position: relative;

  figcaption {
    font-style: italic;
    text-align: center;
    color: $white;
    font-size: 30px;
    padding: 35px 0;

    @include sm-and-down-alternative() {
      font-size: 20px;
    }
  }

  img {
    width: 100%;
  }

  &.expanded {
    overflow-y: auto;
    position: fixed;
    z-index: 999999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $dark-gray-2;
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    justify-content: center;
    padding-bottom: 0;

    & > img {
      width: 100%;
      max-width: 1200px;
      max-height: 100%;
      object-fit: contain;
      margin: 0 auto;
    }
  }
  .return-button {
    position: fixed;
    top: 10px;
    left: 10px;
    cursor: pointer;
    background: transparent;
    border: 0;
    transition: opacity 0.25s ease-in-out;

    svg {
      filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5));

      path {
        fill: #fff;
      }
    }

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
