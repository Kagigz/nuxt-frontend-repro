<script setup lang="ts">
const updates = [
  {
    label: 'ASSETS',
    content: '',
    icon: 'chevron-right',
    linkTo: 'assets',
  },
  {
    label: 'COURSES',
    content: '',
    icon: 'chevron-left',
    linkTo: 'courses',
  },
  {
    label: 'POSTS',
    content: '',
    icon: 'chevron-right',
    linkTo: 'blog',
  },
]

const getUpdateBlockClass = (i: number) => {
  let className = 'w-full h-96 px-8 update-block'
  if (i % 2 === 0) className += ' red-drop'
  else className += ' red-drop-reverse'

  return className
}

const getUpdateClass = (i: number) => {
  let className = 'px-8 md:px-16'
  if (i % 2 !== 0) className += ' md:order-last'
  return className
}

const getUpdateIconClass = (i: number) => {
  let className = 'items-center hidden md:flex'
  if (i % 2 === 0) className += ' ml-2'
  else className += ' mr-2 md:order-first'
  return className
}
</script>

<template>
  <div id="updates" class="background-black pt-24 pb-12 text-center">
    <!-- MONTHLY UPDATE -->
    <div>
      <div class="title white-filled">MONTHLY UPDATE</div>
      <div class="mt-10 flex mx-8 md:mx-56 items-center">
        <div
          class="icon-big"
          v-html="$feathericons['chevron-right'].toSvg()"
        ></div>
        <p class="paragraph medium-text mx-10">
          For the beginning of this year, I've set up new processes to be able
          to produce more content, more frequently. Stay tuned!
        </p>
        <div
          class="icon-big"
          v-html="$feathericons['chevron-left'].toSvg()"
        ></div>
      </div>
    </div>
    <!-- LATEST NEWS -->
    <div>
      <div class="title my-24">LATEST NEWS</div>
      <div
        v-for="(n, i) in updates"
        :key="i"
        class="grid md:grid-cols-2 gap-y-6 mb-16 items-center"
      >
        <div :class="getUpdateClass(i)">
          <div :class="getUpdateBlockClass(i)"></div>
        </div>
        <div
          class="
            flex
            items-center
            big-cta
            pink-hover
            justify-center
            click
            mt-4
            md:mt-0
          "
        >
          <div>SEE ALL {{ n.label }}</div>
          <div
            class="flex items-center ml-2 md:hidden"
            v-html="$feathericons['chevron-right'].toSvg()"
          ></div>
          <div
            :class="getUpdateIconClass(i)"
            v-html="$feathericons[n.icon].toSvg()"
          ></div>
        </div>
      </div>
    </div>
    <!-- SUSCRIBE CTA -->
    <div class="mt-24 flex flex-col justify-center items-center">
      <div class="medium-text">Interested in getting updates?</div>
      <NuxtLink to="#newsletter">
        <div class="cta mt-3 click flex justify-center items-center flex-col">
          <div>SUSCRIBE TO MY NEWSLETTER</div>
          <div class="mt-2" v-html="$feathericons['arrow-down'].toSvg()"></div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
@import '~/styles/theme.scss';

.update-block {
  background-color: $white;
}
</style>
