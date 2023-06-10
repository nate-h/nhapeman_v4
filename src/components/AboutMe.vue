<template>
  <header-container header="About Me">
    <div class="about-me-container">
      <div class="row">
        <h2>About Me</h2>
        <p>
          Hi! I'm Nathanial Hapeman and I am a professional software engineer. I've been programming
          professionally for
          {{ years_of_experience() }} years primarily as a full stack developer but have worked in
          other domains such as: simulation / game development, machine learning and data science.
          The computer languages I have the most experience with are c/c++, python and javascript
          but have coded for fun and professionally in many more. Outside of my career,
          I enjoy hiking, table tennis, netflexing, and having a good time with friends. Always
          interested in meeting new people and learning something new so send me an email if you
          want to get in touch.
        </p>
      </div>
      <div class="row">
        <img src="../assets/stitchedme.jpg" alt="pic-of-me" />
      </div>
      <div class="row">
        <h2>Details</h2>
        <ul>
          <li class="question">Name:</li>
          <li class="answer">Nathanial Hapeman</li>
          <li class="question">Age:</li>
          <li class="answer">{{ my_rough_age() }}</li>
          <li class="question">Location:</li>
          <li class="answer">Los Angeles, CA</li>
          <li class="question">Education:</li>
          <li class="answer">UC Riverside</li>
          <li class="answer">BS in Mechanical Engineering, minor in Computer Science</li>
        </ul>
      </div>
    </div>
  </header-container>
</template>

<script setup lang="ts">
function my_rough_age() {
  const bday = new Date('1990-03-01')
  const ageDifMs = Date.now() - bday.getTime()
  const ageDate = new Date(ageDifMs)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

function years_of_experience() {
  const firstJobDate = new Date('2014-06-01')
  const ageDifMs = Date.now() - firstJobDate.getTime()
  const ageDate = new Date(ageDifMs)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}
</script>

<style lang="scss">
@import '../scss/main.scss';
.about-me-container {
  @extend %l-to-r, .equal, .lt;

  .row {
    &:not(:first-child) {
      margin-left: $margin;
    }
    &:not(:last-child) {
      margin-right: $margin;
    }

    ul {
      list-style: none;

      li {
        &.question {
          color: $dark2;
          margin-top: $margin-small;
        }

        &.answer {
          color: $dark1;
          font-weight: $fw-bold;
        }
      }
    }
  }
}

@media screen and (max-width: $break-large) {
  .about-me-container {
    @include holder('t-to-b', 'lt');

    .row:not(:last-child) {
      margin-bottom: $margin-large;
    }
  }
}
</style>
