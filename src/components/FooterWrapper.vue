<template functional>
  <footer id="footer" class="footer">
    <div class="footer-container w-container">
      <div class="footer-flex-container">
        <div class="div-1">
          <router-link to="/" title="Logo" aria-label="Logo Image Link" class="footer-logo-link w-inline-block"
            ><img src="@/assets/img/logo.png" alt="Logo" class="footer-image"
          /></router-link>
          <p class="p-secondary footer-brand-statement">
            Keep an eye on your site.
          </p>
        </div>
        <div class="div-2">
          <h2 class="footer-heading">Website</h2>
          <ul role="list" class="w-list-unstyled">
            <li><router-link title="Home" aria-label="Home Link" to="/" class="footer-link">Home</router-link></li>
            <li>
              <router-link title="Pricing" aria-label="Pricing Link" to="/" class="footer-link">Pricing</router-link>
            </li>
          </ul>
        </div>
        <div class="div-3">
          <h2 class="footer-heading">Resources</h2>
          <ul role="list" class="w-list-unstyled">
            <li>
              <router-link title="Knowledge Base" aria-label="Knowledge Updates Link" to="/" class="footer-link"
                >Knowledge Base</router-link
              >
            </li>
            <li>
              <router-link title="Product Updates" aria-label="Product Updates Link" to="/" class="footer-link"
                >Product Updates</router-link
              >
            </li>
          </ul>
        </div>
        <div class="div-4">
          <h2 class="footer-heading">Access</h2>
          <ul role="list" class="w-list-unstyled">
            <li><router-link title="Login" aria-label="Login Link" to="/" class="footer-link">Login</router-link></li>
            <li>
              <router-link title="Free trial" aria-label="Free trial Link" to="/" class="footer-link"
                >Start your free trial</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="div-5">
        <div class="footer-copyright">© 2020 Lynxx. All rights reserved.</div>
        <div>
          <router-link title="Terms" aria-label="Terms Link" to="/" class="footer-copyright-link">Terms</router-link
          ><router-link title="Privacy" aria-label="Privacy Link" to="/" class="footer-copyright-link"
            >Privacy</router-link
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin: 32px 0;

  .w-container {
    margin-left: auto;
    margin-right: auto;
  }

  &-container {
    max-width: 1140px;
  }

  .div-1 {
    max-width: 350px;

    @include sm-and-down() {
      max-width: 100%;
    }
  }

  .div-2 {
    padding-top: 10px;
  }

  &-copyright {
    border: 1px none #000;
    color: #8a94a6;
    font-size: 12px;
    text-align: left;

    &-link {
      margin-left: 15px;
      color: #8a94a6;
      font-size: 12px;
      text-align: right;
      text-decoration: none;
      background-color: transparent;
    }
  }

  .div-5 {
    display: flex;
    padding: 40px 0 0 0;
    justify-content: space-between;
    border-top: 1px solid rgba(146, 155, 172, 0.2);

    @include sm-and-down() {
      flex-flow: column nowrap;
      align-items: center;
    }
  }

  .w-list-unstyled {
    padding-left: 0;
    list-style: none;
  }

  &-heading {
    margin-top: 0px;
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 1.5;
    font-weight: bold;
  }

  &-link {
    display: block;
    margin-bottom: 10px;
    color: $light-gray-4;
    font-size: 14px;
    background-color: transparent;
    text-decoration: none;

    &:hover {
      color: $yellow;
      text-decoration: none;
    }
  }

  .p-secondary {
    margin-bottom: 0px;
    color: $light-gray-4;
    line-height: 24px;
    font-weight: 400;
    text-align: left;

    &.footer-brand-statement {
      font-size: 14px;
    }

    @include sm-and-down() {
      text-align: center;
    }
  }

  &-logo-link {
    max-height: 40px;
    max-width: 80px;
    min-width: 40px;
    margin-bottom: 20px;
    flex: 0 auto;
  }

  .w-inline-block {
    display: inline-block;
  }

  &-image {
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: 0% 50%;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    border: 0;
  }

  &-flex-container {
    display: flex;
    margin-bottom: 60px;
    justify-content: space-between;
    text-align: left;

    @include sm-and-down() {
      margin-bottom: 0;
      display: flex;
      text-align: center;
      flex-flow: column nowrap;
    }
  }

  @for $num from 1 through 4 {
    .div-#{$num} {
      @include sm-and-down() {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
