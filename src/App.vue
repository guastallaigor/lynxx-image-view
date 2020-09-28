<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

body,
html {
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  height: inherit;
  width: inherit;
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
  font-weight: normal;
}

::selection {
  background: $yellow;
  color: $white;
}

@media screen and (min-width: 1024px) {
  $scroll: 9px;

  ::-webkit-scrollbar {
    width: $scroll;
    height: $scroll;
  }

  ::-webkit-scrollbar-thumb {
    background: $yellow;
  }

  ::-webkit-scrollbar-track {
    background: $light-gray-2;
  }
}
</style>
