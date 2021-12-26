<script setup lang="ts">
const latestNews = [
  {
    name: 'My journey from 0 to MVP of a SaaS product in 3 months',
    link: '',
  },
  {
    name: 'Transitioning from Software Engineer to CTO',
    link: '',
  },
  {
    name: 'The technical stack I’m using as an early-stage CTO',
    link: '',
  },
  {
    name: 'How to build a personal website or blog for free with the JamStack',
    link: '',
  },
  {
    name: 'UI Design Resources to kickstart your project',
    link: '',
  },
  {
    name: 'What I learned during my 1st year working at Microsoft',
    link: '',
  },
]
</script>

<template>
  <div id="newsletter" class="py-16 md:py-24">
    <!-- PRESENTATION -->
    <div class="mx-24 md:mx-96 text-center">
      <p class="paragraph big-text">
        I like to talk about tech, entrepreneurship, and teach others about
        technical, product, design and startup-related stuff.
      </p>
      <div
        class="big-cta red-hover mt-6 click flex items-center justify-center"
      >
        <div>GET TO KNOW ME</div>
        <div
          class="ml-2 flex items-center"
          v-html="$feathericons['chevron-right'].toSvg()"
        ></div>
      </div>
    </div>
    <div
      class="
        grid
        md:grid-cols-6
        px-16
        md:px-24
        justify-between
        mt-16
        items-center
      "
    >
      <!-- NEWSLETTER TEASING -->
      <div class="md:col-span-4 dark-grey">
        Some of the previous things I talked about...
        <ul class="pl-6 mt-4 flex flex-col items-start">
          <li
            v-for="(n, i) in latestNews"
            :key="i"
            class="py-1 flex items-center"
          >
            <div
              class="pink mr-2 flex items-center"
              v-html="$feathericons['chevron-right'].toSvg()"
            ></div>
            <NuxtLink :to="n.link" class="link">
              {{ n.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- NEWSLETTER FORM -->
      <div class="md:col-span-2">
        <div class="red">
          If this sounds interesting to you, subscribe to get the latest updates
          and get my free Tech Resources List!
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
