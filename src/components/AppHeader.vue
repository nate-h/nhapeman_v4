<template>
  <header class="nav-bar">
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
    <div class="link-holder l-to-r">
      <div v-for="link in routes" :key="link.name">
        <RouterLink class="router-link" :to="link.path">
          <span>{{ link.name }}</span>
        </RouterLink>
      </div>
    </div>

    <SVGLink link="https://www.linkedin.com/in/nhapeman/" light>
      <img alt="linkedin logo" src="@/assets/linkedin.svg" />
    </SVGLink>
    <SVGLink link="https://github.com/nate-h" light>
      <img alt="github logo" src="@/assets/github.svg" />
    </SVGLink>
    <SVGLink link="mailto:nhapeman@gmail.com?Subject=Hey%20Nate" light>
      <img alt="email logo" src="@/assets/email.svg" />
    </SVGLink>
  </header>
</template>

<script lang="ts" setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'

const routes = useRouter().options.routes
</script>

<style lang="scss">
@import '../scss/main.scss';

.nav-bar {
  @include holder('r-to-r');
  background-color: $dark0;
  padding: $padding;

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

  .link-holder {
    @extend %l-to-r, .ca;

    margin-left: auto;
  }
}

.dropdown {
  vertical-align: middle;
  position: relative;

  .label {
    @extend %l-to-r, .ca;
  }

  .list {
    @extend %t-to-b;
    color: white;
    display: none;
    background-color: $dark1;
    flex-wrap: nowrap;
    font-size: 2rem;
    padding: $padding;
    position: absolute;
    right: 0;
    white-space: nowrap;
    z-index: 2;

    & > *:not(:last-child) {
      margin-bottom: $margin;
    }
  }

  &:hover {
    background-color: $dark1;
    .list {
      display: flex;
    }

    .label svg {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }
}

@media screen and (max-width: $break-large) {
  .nav-bar {
    @include holder('t-to-b', 'lt', 'ca');

    .link-holder {
      margin-left: 0;
    }
  }
}
</style>
