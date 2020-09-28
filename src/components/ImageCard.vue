<template>
  <div
    class="image-card"
    @click="goToFullScreenImage"
    :class="{ 'min-h-auto': minHeightAuto, 'min-h-300': !minHeightAuto }"
  >
    <v-lazy-image :src="src" :alt="caption" :title="caption" class="pointer" />
    <figcaption>{{ caption }}</figcaption>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VLazyImage from "v-lazy-image";

@Component({
  components: {
    VLazyImage
  }
})
export default class ImageCard extends Vue {
  @Prop({ type: String, required: true })
  private id!: string;

  @Prop({ type: String, required: true })
  private src!: string;

  @Prop({ type: String, required: true })
  private caption!: string;

  @Prop({ type: Boolean, default: false })
  private minHeightAuto!: boolean;

  private goToFullScreenImage() {
    if (!this.id) return;

    this.$router.push(`/image/${this.id}`);
  }
}
</script>

<style lang="scss">
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>

<style lang="scss" scoped>
.image-card {
  overflow: hidden;
  border-radius: 4px;
  width: 100%;
  min-height: 450px;
  transition: all 0.3s ease-in-out;
  will-change: opacity, top;
  position: relative;
  top: 0;

  &:hover {
    filter: opacity(80%);
    top: -5px;
  }

  img {
    border-radius: 4px;
    object-fit: cover;
    width: 100%;
    height: 100%;
    line-height: 0;
    display: block;
  }

  figcaption {
    background-color: $dark-gray-3;
    color: $white;
    font: italic smaller sans-serif;
    padding: 7px 5px 5px 5px;
    margin-top: -2px;
    text-align: center;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
}

.min-h-auto {
  @include lg-and-down-alternative() {
    min-height: auto;
  }
}

.min-h-300 {
  @include lg-and-down-alternative() {
    min-height: 300px;
  }
}
</style>
