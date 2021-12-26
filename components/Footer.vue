<script setup lang="ts">
const state = reactive({
  bounce: false,
})

const socials = ['twitter', 'instagram', 'github', 'youtube']

const setBounce = (bounce: boolean) => {
  state.bounce = bounce
}

const getIconClass = () => {
  let className = 'click mr-3'
  if (state.bounce) className += ' animate-bounce-hover'
  return className
}
</script>

<template>
  <div class="background-black px-16 pt-8 pb-4 text-center md:text-left">
    <div class="grid gap-y-8 md:grid-cols-5 sm:grid-cols-3">
      <!-- CONTACT -->
      <div class="md:col-span-2 sm:col-span-3">
        <div class="medium-title">KATIA.GG</div>
        <div class="xs-title mt-6">CONTACT ME</div>
        <div>katiaggpro@gmail.com</div>

        <div class="socials flex mt-10 justify-center md:justify-start">
          <div v-for="(n, i) in socials" :key="i" :class="getIconClass()">
            <div v-html="$feathericons[n].toSvg()"></div>
          </div>
        </div>
      </div>
      <!-- ASSETS -->
      <div>
        <div class="small-title pt-2">ASSETS</div>
        <div class="footer-links mt-2 md:mt-6">
          <ul>
            <li>Tech Resources</li>
            <li>Asset 2</li>
            <li>Asset 3</li>
          </ul>
        </div>
      </div>
      <!-- LEARN -->
      <div>
        <div class="small-title pt-2">LEARN</div>
        <div class="footer-links mt-2 md:mt-6">
          <ul class="flex flex-col items-start">
            <li class="link">Ebook</li>
            <li class="link">Courses</li>
            <li class="link">Blog</li>
            <li class="link">Videos</li>
          </ul>
        </div>
      </div>
      <!-- MORE -->
      <div>
        <div class="small-title pt-2">MORE</div>
        <div class="footer-links mt-2 md:mt-6">
          <ul>
            <li>About</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center mt-8 md:mt-4">
      Made with ❤️ in 2021 by Katia Gil Guzman
    </div>
  </div>
</template>
