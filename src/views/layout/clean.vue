<template>
  <main class="h-100">
    <transition name="fade-custom" mode="out-in">
      <router-view />
    </transition>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Clean extends Vue {}
</script>
