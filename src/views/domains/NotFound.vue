<template functional>
  <section class="not-found layout align-center wrap-column justify-center">
    <h2>OOPS...</h2>
    <h1>404</h1>
    <p>Error</p>
    <p>Sorry, the page you are looking for could not be found</p>
  </section>
</template>

<style lang="scss">
@mixin set-font-style($margin: 0, $color: $yellow, $fontSize: 2.5em) {
  margin: $margin;
  font-size: $fontSize;
  color: $color;
}

.not-found {
  position: relative;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 200px;

  > h2 {
    @include set-font-style();
  }

  > h1 {
    @include set-font-style(0, $dark-gray, 8.5em);
    font-weight: bold;
  }

  > p {
    @include set-font-style(0 0 0.5em 0, $dark-gray, 2.5em);
  }

  > p + p {
    @include set-font-style(0, $dark-yellow, 1.5em);
    border-top: 1px solid $dark-yellow;
    padding: 1em 1.5em 0 1.5em;
  }
}
</style>
