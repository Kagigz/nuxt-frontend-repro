<script setup lang="ts">
import { onMounted } from '@vue/runtime-dom'

</script>

<template>
  <div id="home" class="md:h-screen flex flex-col md:flex-row">
    <div class="md:h-screen md:order-last">
      <div class="h-full flex flex-col justify-center items-end pt-16">
        <div class="px-24 md:px-48 text-justify pb-16 md:pb-2">
          <div class="title">
            TL;DR
          </div>
          <p class="tldr-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu semper orci. Nullam vestibulum nulla lorem, non maximus urna aliquam ultricies. Mauris sagittis augue ac enim rutrum lobortis. Sed et finibus est, vitae convallis ipsum. Fusce ut lectus est. Donec fermentum ipsum volutpat, ornare turpis at, posuere magna. Pellentesque commodo, tellus id sodales iaculis, orci libero gravida ante, ut mattis arcu nibh sed mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin velit ante, commodo a elementum sed, fringilla nec turpis.

            Aenean interdum viverra felis sit amet porttitor. Mauris efficitur volutpat risus, et congue felis laoreet non. Cras et est at felis sagittis mollis id ac turpis. Vivamus semper massa non nulla suscipit, eget malesuada lectus rutrum. Praesent ac urna in purus pharetra ultricies ut non metus. Morbi sed accumsan urna, feugiat egestas tortor. Morbi venenatis aliquet dolor. Suspendisse ac neque dolor.
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
              <div class="mb-1">
                READ MY STORY
              </div>
              <div v-html="$feathericons['arrow-down'].toSvg()"></div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="md:h-screen md:w-2/6">
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
