<script setup lang="ts">
const iconState = reactive({
  bounce: [false, false, false, false],
})

const socials = [
  {
    icon: 'linkedin',
    link: 'https://linkedin.com/in/katiagilguzman',
  },
  {
    icon: 'twitter',
    link: 'https://twitter.com/kagigz',
  },
  //  {
  //   icon: 'instagram',
  //   link: ,
  //  },
  {
    icon: 'github',
    link: 'https://github.com/Kagigz',
  },
  //  {
  //   icon: 'youtube',
  //   link: ,
  //  },
]

const setIconBounce = (index: number, bounce: boolean) => {
  iconState.bounce[index] = bounce
}

const getIconClass = (index: number) => {
  let className = 'click mr-3 enlarge-hover'
  if (iconState.bounce[index]) className += ' animate-bounce-hover'
  return className
}

const assetsLinks = [
  {
    label: 'Tech Resources',
    path: '/',
  },
  {
    label: 'Design Resources',
    path: '/',
  },
  //   {
  //   label: 'Building a SaaS checklist',
  //   path: '/'
  // },
]

const learnLinks = [
  {
    label: 'Courses',
    path: '/courses',
  },
  {
    label: 'Blog',
    path: '/blog',
  },
]

const exploreLinks = [
  {
    label: 'Blog',
    path: '/blog',
  },
  {
    label: 'Talks',
    path: '/talks',
  },
  {
    label: 'Links',
    path: '/links',
  },
]

const aboutLinks = [
  {
    label: 'My Story',
    path: '/about',
  },
  {
    label: 'Talks',
    path: '/talks',
  },
]

const moreLinks = [
  {
    label: 'Links',
    path: '/links',
  },
  {
    label: 'Privacy Policy',
    path: '/privacy',
  },
]

// const { data: exploreLinks, refresh: refreshExplore } = useLazyFetch('/api/explore-link', { baseURL: 'http://localhost:1337' })
// const { data: aboutLinks, refresh: refreshAbout } = useLazyFetch('/api/about-link', { baseURL: 'http://localhost:1337' })
// const { data: moreLinks, refresh: refreshMore } = useLazyFetch('/api/more-link', { baseURL: 'http://localhost:1337' })

</script>

<template>
  <div class="background-black px-16 pt-8 pb-4 text-center md:text-left">
    <div class="w-full md:flex justify-between">
      <!-- CONTACT -->
      <div>
        <div class="medium-title">
          KATIA.GG
        </div>
        <div class="xs-title mt-6">
          CONTACT ME
        </div>
        <div>hello@katia.gg</div>
      </div>
      <div class="socials flex mt-6 md:mt-2 justify-center md:justify-start">
        <div v-for="(n, i) in socials" :key="i" :class="getIconClass(i)">
          <a
            :href="n.link"
            target="_blank"
          ><div v-html="$feathericons[n.icon].toSvg()"></div></a>
        </div>
      </div>
    <!-- <div class="grid gap-y-8 md:grid-cols-5 sm:grid-cols-3">
      <div class="md:col-span-2 sm:col-span-3">
        <div class="medium-title">
          KATIA.GG
        </div>
        <div class="xs-title mt-6">
          CONTACT ME
        </div>
        <div>hello@katia.gg</div>

        <div class="socials flex mt-10 justify-center md:justify-start">
          <div v-for="(n, i) in socials" :key="i" :class="getIconClass(i)">
            <a
              :href="n.link"
              target="_blank"
            ><div v-html="$feathericons[n.icon].toSvg()"></div></a>
          </div>
        </div>
      </div> -->
      <!-- EXPLORE -->
      <!-- <div>
        <div class="small-title pt-2">
          EXPLORE
        </div>
        <div class="footer-links mt-2 md:mt-6">
          <ul v-if="exploreLinks" class="flex flex-col items-center md:items-start">
            <li v-for="(n, i) in exploreLinks" :key="i" class="hover-link">
              <NuxtLink :to="n.path">
                {{ n.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div> -->
      <!-- ABOUT -->
      <!-- <div>
        <div class="small-title pt-2">
          ABOUT
        </div>
        <div class="footer-links mt-2 md:mt-6">
          <ul v-if="aboutLinks" class="flex flex-col items-center md:items-start">
            <li v-for="(n, i) in aboutLinks" :key="i" class="hover-link">
              <NuxtLink :to="n.path">
                {{ n.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div> -->
      <!-- MORE -->
      <!-- <div>
        <div class="small-title pt-2">
          MORE
        </div>
        <div class="footer-links mt-2 md:mt-6">
          <ul v-if="moreLinks" class="flex flex-col items-center md:items-start">
            <li v-for="(n, i) in moreLinks" :key="i" class="hover-link">
              <NuxtLink :to="n.path">
                {{ n.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div> -->
    </div>
    <div class="text-center small-text mt-6 md:mt-4">
      Made with ❤️ by Katia Gil Guzman
    </div>
  </div>
</template>
