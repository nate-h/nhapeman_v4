<template>
  <header class="app-header">
    <!-- Logo -->
    <div class="logo-blob">
      <img src="@/assets/logo.png" class="logo" />
      <div class="me t-to-b lt">
        <RouterLink to="/">
          <h1>Nathanial Hapeman</h1>
          <h2>Software Engineer</h2>
        </RouterLink>
      </div>
    </div>

    <!-- Links -->
    <div class="routes l-to-r">
      <div v-for="link in routes" :key="link.name">
        <RouterLink class="router-link" :to="link.path">
          <span>{{ link.name }}</span>
        </RouterLink>
      </div>
    </div>

    <!-- Social Links -->
    <div class="social-links">
      <SVGLink link="https://www.linkedin.com/in/nhapeman/" light>
        <img alt="linkedin logo" src="@/assets/linkedin.svg" />
      </SVGLink>
      <SVGLink link="https://github.com/nate-h" light>
        <img alt="github logo" src="@/assets/github.svg" />
      </SVGLink>
      <SVGLink link="mailto:nhapeman@gmail.com?Subject=Hey%20Nate" light>
        <img alt="email logo" src="@/assets/email.svg" />
      </SVGLink>
    </div>

  </header>
</template>

<script lang="ts" setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'

const routes = useRouter().options.routes
</script>

<style lang="scss">
@import '../scss/main.scss';

.app-header {
  background-color: $dark0;
  padding: $padding;
  display: flex;
  width: 100%;
  z-index: 100;

  img {
    height: 4.5rem;
    margin: 0;
    padding: 0;
    margin-right: $margin;
    width: 4.5rem;

    -webkit-transition: -webkit-transform 0.8s ease-in-out;
    transition: transform 0.8s ease-in-out;
  }

  .logo-blob {
    @extend %l-to-r, .lt;

    .logo:hover {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }

    .me {
      a {
        @extend %pop;
      }
    }
  }

  .routes {
    @extend %l-to-r, .ca;
    margin-left: auto;
  }

  .social-links {
    display: flex;
    align-items: center;
    margin-left: 2em;
  }
}

@media screen and (max-width: $break-large) {
  .app-header {
    @include holder('t-to-b', 'lt', 'ca');

    .routes {
      margin-left: 0;
    }
  }
}
</style>
