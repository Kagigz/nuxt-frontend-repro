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
    <div class="mx-24 md:mx-48 lg:mx-96 text-center">
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
        md:grid-cols-9
        px-2
        sm:px-8
        md:px-16
        lg:px-32
        justify-between
        mt-16
        items-center
        gap-y-8
      "
    >
      <!-- NEWSLETTER TEASING -->
      <div class="md:col-span-6 dark-grey">
        <div class="text-center md:text-left">
          Some of the previous things I talked about...
        </div>
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
      <div class="md:col-span-3">
        <div class="red text-center">
          If this sounds interesting to you, subscribe to get the latest updates
          and get my free Tech Resources List!
        </div>
        <div class="mt-6 md:text-right">
          <div class="form-item">
            <div class="dark-grey">First name</div>
            <input
              class="input focus:outline-none"
              type="text"
              name="firstName"
            />
          </div>
          <div class="form-item">
            <div class="dark-grey">Last name</div>
            <input
              class="input focus:outline-none"
              type="text"
              name="lastName"
            />
          </div>
          <div class="form-item">
            <div class="dark-grey">Email</div>
            <input class="input focus:outline-none" type="email" name="Email" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
