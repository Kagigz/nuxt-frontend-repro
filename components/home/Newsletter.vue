<script setup lang="ts">

import qs from 'qs'

const query = qs.stringify({
  sort: ['createdAt:desc'],
})

// const latestNews = [
//   {
//     name: 'Transitioning from Software Engineer to CTO',
//     link: '',
//   },
//   {
//     name: 'The technical stack I\'m using as an early-stage CTO',
//     link: '',
//   },
//   {
//     name: 'What\'s hard about doing product when you come from Engineering',
//     link: '',
//   },
//   {
//     name: 'My process to learn new skills online',
//     link: '',
//   },
//   {
//     name: 'Best Engineering Practices I brought from Microsoft to my startup',
//     link: '',
//   },
//   {
//     name: 'What I learned during my 1st year working at Microsoft',
//     link: '',
//   },
// ]

const { data: latestNews, refresh } = useLazyFetch(`/api/latest-news?${query}`, { baseURL: 'http://localhost:1337' })

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
        <div>
          <NuxtLink to="/about">
            GET TO KNOW ME
          </NuxtLink>
        </div>
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
        <ul v-if="latestNews" class="pl-6 mt-4 flex flex-col items-start">
          <li
            v-for="(n, i) in latestNews.data"
            :key="i"
            class="py-1 flex items-center"
          >
            <div
              class="pink mr-2 flex items-center"
              v-html="$feathericons['chevron-right'].toSvg()"
            ></div>
            <a :href="n.attributes.link" class="hover-link" target="_blank">
              {{ n.attributes.title }}
            </a>
          </li>
        </ul>
      </div>

      <!-- NEWSLETTER FORM -->
      <div class="md:col-span-3">
        <div class="red text-center">
          If this sounds interesting to you, subscribe to get the latest updates
          <!-- and get my <span class="bold">free Tech Resources List!</span> -->
        </div>
        <NewsletterForm />
      </div>
    </div>
  </div>
</template>
