<template>
  <footer class="my-footer">
    <div class="contact">
      <a href="mailto:nhapeman@gmail.com?Subject=Hey%20Nate" target="_top">
        <h1>Contact Info</h1>
        <h2>nhapeman@gmail.com</h2>
      </a>
    </div>

    <div class="social-links">
      <SVGLink link="https://www.linkedin.com/in/nhapeman/" light>
        <img alt="linkedin logo" src="@/assets/linkedin.svg" />
      </SVGLink>
      <SVGLink link="https://github.com/nate-h" light>
        <img alt="github logo" src="@/assets/github.svg" />
      </SVGLink>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../scss/main.scss';
.my-footer {
  background-color: $dark0;
  padding: $padding;
  @extend %l-to-r, .lt;

  .contact {
    @extend %t-to-b, .lt, %pop;
  }

  .social-links {
    margin-left: auto;
    @extend %l-to-r;

    & > * {
      margin: 4px;
    }
  }
}
</style>
