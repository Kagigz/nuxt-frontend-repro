<script setup lang="ts">
</script>

<template>
  <div id="home" class="md:h-screen flex flex-col md:flex-row">
    <div class="md:h-screen md:order-last">
      <div class="h-full flex flex-col justify-center items-end pt-16">
        <div class="px-24 md:px-48 text-justify pb-16 md:pb-2">
          <div class="title">TL;DR</div>
          <p class="tldr-paragraph">Learned to code when I was 10 years old.</p>
          <p class="tldr-paragraph">
            Fell in love with it young which allowed me to stay motivated
            through the bias people threw at me.
          </p>
          <p class="tldr-paragraph">
            Pursued Software Engineering studies at Telecom SudParis (France).
          </p>
          <p class="tldr-paragraph">
            Did my end-of-studies internship at Microsoft and joined them
            full-time afterwards.
          </p>
          <p class="tldr-paragraph">
            Left Microsoft after 3 years to launch a startup with the help of a
            startup studio.
          </p>
          <p class="tldr-paragraph">
            Now CTO of Emera, and creating content on the side.
          </p>
          <NuxtLink to="#presentation">
            <div
              class="
                mt-24
                cta
                red
                flex
                justify-center
                items-center
                flex-col
                click
              "
            >
              <div class="mb-1">READ MY STORY</div>
              <div v-html="$feathericons['arrow-down'].toSvg()"></div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="md:h-screen md:w-2/6">
      <img src="/assets/imgs/me/about-photo.png" class="picture" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/styles/theme.scss';

.picture {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.tldr-paragraph {
  padding: 2px 0;
}
</style>
