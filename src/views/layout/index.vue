<template>
  <div>
    <toolbar />
    <github-corner />
    <main id="main">
      <transition name="fade-custom" mode="out-in">
        <router-view />
      </transition>
    </main>
    <footer-wrapper />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import GithubCorner from "@/components/GithubCorner.vue";
import Toolbar from "@/components/Toolbar.vue";
import FooterWrapper from "@/components/FooterWrapper.vue";

@Component({
  components: {
    GithubCorner,
    Toolbar,
    FooterWrapper
  }
})
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>
#main {
  padding-top: 160px;

  @include sm-and-down-alternative() {
    padding-top: 70px;
  }

  @include xs-alternative() {
    padding-top: 120px;
  }
}
</style>
