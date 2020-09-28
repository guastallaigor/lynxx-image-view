<template>
  <header role="banner" title="Banner" aria-label="Header" class="navbar">
    <div class="nav-container">
      <router-link to="/" aria-label="Logo Image Link" title="Favorite Views" class="brand link"
        ><img src="@/assets/img/logo.png" alt="Logo" class="logo"
      /></router-link>
      <div class="spacer"></div>
      <nav role="navigation" class="nav-menu" aria-label="Navigation bar" title="Navigation Bar">
        <router-link to="/" aria-label="Home Link" title="Home" class="link">Home</router-link
        ><router-link to="/favorite-views" aria-label="Favorite Views Button" title="Favorite Views" class="button link"
          >Favorite Views</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Toolbar extends Vue {}
</script>

<style lang="scss" scoped>
@mixin hover-effect() {
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.75;
  }
}

.navbar {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: auto;
  z-index: 2;
  padding: 0 40px;
  border-bottom: 1px solid $light-gray;
  backdrop-filter: saturate(180%) blur(7px);

  @include sm-and-down-alternative() {
    padding: 0;
  }

  .nav-container {
    display: flex;
    max-width: 1200px;
    align-items: center;
    flex-flow: row wrap;
    margin: 0 auto;

    @include sm-and-down-alternative() {
      justify-content: center;
    }
  }

  .link {
    font-size: 13px;
    line-height: 16px;
    position: relative;
    vertical-align: top;
    text-decoration: none;
    padding: 20px;
    text-align: left;
    transition: opacity 300ms ease;
    display: inline-block;
    margin-right: 5px;
    margin-left: 5px;
    color: $dark-gray;
    background-color: transparent;
    font-weight: 400;
    @include hover-effect();
  }

  .brand {
    position: relative;
    line-height: 32px;

    @include sm-and-down-alternative() {
      line-height: 0.1em;
      padding: 0;
    }

    img {
      @include sm-and-down-alternative() {
        max-width: 200px;
      }
    }
  }

  .spacer {
    flex: 1;

    @include sm-and-down-alternative() {
      display: none;
    }
  }

  .nav-menu {
    display: flex;
    align-items: center;
    position: relative;
    justify-content: flex-end;
  }

  .button {
    margin-left: 10px;
    padding-top: 16px;
    padding-bottom: 16px;
    background-color: $yellow;
    border-radius: 4px;
    color: $dark-gray-2;
    font-weight: 400;
    @include hover-effect();
  }
}
</style>
