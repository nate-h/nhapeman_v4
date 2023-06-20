<template>
  <ProjectCard title="My thoughts on learning Vue" description="Vue3, Sass, Typescript">
    <!-- Summary -->
    <template v-slot:summaryImage>
      <img alt="vue logo" src="@/assets/vuelogo.svg" />
    </template>
    <template v-slot:summaryText>
      <p>
        This is the fourth major rewrite of my personal website but second version written in Vue.
        Coming from an Angular background, I picked up Vue pretty easily. Here are my thoughts on
        the two frameworks.
      </p>
    </template>
    <!-- Full -->
    <template v-slot:demo>
      <img alt="vue logo" src="@/assets/vuelogo.svg" />
    </template>
    <template v-slot:fullText>
      <p>
        I wrote this website you're viewing now using Vue and Sass as a learning experience. The
        biggest thing I wanted to learn was Vue since I came from an AngularJS background. For this
        reason, I wrote most of it from scratch so I could learn the ins and outs of Vue.
        <a href="https://github.com/nate-h/nhapeman.com_v3"> Check out the code here! </a>
        In addition to wanting to learn Vue, I also wanted to take the time and learn some of things
        I didn't have time to learn on the job. As a software developer, you constantly have to
        fight deadlines and sadly this means you have to occasionally put aside learning something
        to meet a deadline. The last thing I hoped to learn while developing this website was new
        patterns from using the
        <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself">DRY principle</a>
        wherever possible. So while developing this website, I rewrote many things as I learned
        cooler things Vue had to offer.
      </p>
      <p>
        My experience with Vue so far has been completely positive, unlike my experience with
        AngularJS which could have been better. I suspected that the documentation for AngularJS was
        bad but it wasn't until I dove into Vue that I realized what I was missing. The best way to
        read AngularJS documentation is to ignore it completely and use stackoverflow. I found it
        way too complex for describing simple concepts. It also uses other AngularJS terms to define
        something. So You almost need an understanding of everything else to understand one thing.
      </p>
      <p>
        Vue on the other hand was much easier to learn. I'll admit that part of the reason why it
        was easier to learn is that so many things were borrowed from AngularJS. So naturally it
        wasn't too hard to translate a lot of my knowledge over from AngularJS. I think if I didn't
        have a background in AngularJS or any web framework for that matter, Vue would have been
        easy to learn because it's well designed and has documentation geared towards newbies. I
        think one of the reasons why Vue became the framework it is today is that it's mostly
        written by one dude,
        <a href="https://twitter.com/youyuxi?lang=en">Evan You</a> so perhaps it doesn't suffer from
        having <a href="https://www.youtube.com/watch?v=QrGrOK8oZG8">too many cooks</a>.
      </p>
      <p>
        Working with it so far, I find that it has a good balance of giving the developer some
        freedom while still requiring some order in places that create cleaner more manageable code.
        An example of this are the properties you can define when creating a component. These
        properties like watch, props, methods and data provide a formal place to group similar
        items. Vue also provides life cycle hooks that allow you to do stuff at the precise time in
        the component creation. AngularJS has some formal ways to group common functionality and
        even provides some life cycle hooks but it's very minimal. Looking back at most of the
        controllers I wrote, they all would have benefitted by having one place to define the
        watchers or one place to define scope variables. I still developed my own standards to
        attempt to have that behavior but it would have been much easier/ cleaner if the standard
        was built into the framework.
      </p>
      <p>
        Another great feature Vue has is the ability to define a component in one file. These
        <a href="https://vuejs.org/v2/guide/single-file-components.html"> single file components</a>
        simply have the Javascript, CSS, and HTML stuffed into 1 file as opposed to 3 separate
        files. The beauty of this feature is that developers are more incentivised to break up their
        code into smaller pieces. I find it annoying when you want to create a small component but
        need to create 3 files for your css/js/html that have 30 lines each. Being able to throw all
        3 snippets into one file makes it so: you're not overwhelmed by number of files, you can
        bounce around the code faster since it's all in one file, delete the component easier.
      </p>
      <p>
        The last thing I like about Vue is how easy it is to dive into it. The first step of
        learning anything new is getting your foot in the door and with the Vue CLI, it's that much
        easier to get started with Vue. Using the client, it takes 4 lines to get a local website up
        and running. And while configuring a new project, you can choose between many popular
        options for things like linters and testing frameworks. Get started today with:
        <!-- <snippet lang="bash">{{ VueSiteSetup }}</snippet> -->
      </p>
    </template>
  </ProjectCard>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
//import VueSiteSetup from "raw-loader!@/assets/text/VueSiteSetup.txt";
</script>

<style lang="scss" scoped>
@import '../scss/main.scss';

.demo img {
  height: 200px;
}
</style>
