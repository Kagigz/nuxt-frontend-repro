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
  let className = 'click mr-3'
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

const moreLinks = [
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Links',
    path: '/links',
  },
]
</script>

<template>
  <div class="background-black px-16 pt-8 pb-4 text-center md:text-left">
    <div class="grid gap-y-8 md:grid-cols-5 sm:grid-cols-3">
      <!-- CONTACT -->
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
      </div>
      <!-- ASSETS -->
      <div>
        <div class="small-title pt-2">
          ASSETS
        </div>
        <div class="footer-links mt-2 md:mt-6">
          <ul class="flex flex-col items-center md:items-start">
            <li v-for="(n, i) in assetsLinks" :key="i" class="hover-link">
              <NuxtLink :to="n.path">
                {{ n.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- LEARN -->
      <div>
        <div class="small-title pt-2">
          LEARN
        </div>
        <div class="footer-links mt-2 md:mt-6">
          <ul class="flex flex-col items-center md:items-start">
            <li v-for="(n, i) in learnLinks" :key="i" class="hover-link">
              <NuxtLink :to="n.path">
                {{ n.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- MORE -->
      <div>
        <div class="small-title pt-2">
          MORE
        </div>
        <div class="footer-links mt-2 md:mt-6">
          <ul class="flex flex-col items-center md:items-start">
            <li v-for="(n, i) in moreLinks" :key="i" class="hover-link">
              <NuxtLink :to="n.path">
                {{ n.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center small-text mt-8 md:mt-4">
      Made with ❤️ in 2021 by Katia Gil Guzman
    </div>
  </div>
</template>
