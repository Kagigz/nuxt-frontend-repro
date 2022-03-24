<script setup lang="ts">

const { data: links, refresh } = useLazyFetch('/api/links', { baseURL: 'http://localhost:1337' })

</script>

<template>
  <div>
    <div class="min-h-screen md:py-8 md:px-12">
      <h1 class="title mt-10 md:mt-16 ml-4 md:ml-10 mb-8">
        LINKS
      </h1>
      <div v-if="links" class="container w-full h-full py-12 px-6 md:px-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <div
          v-for="link in links.data"
          :key="link.id"
          class="relative wrap overflow-hidden h-full"
        >
          <a :href="link.attributes.link" target="_blank">
            <div class="link-container red-drop h-full flex items-center py-4 px-4">
              <div class="ml-2 mr-4">
                <div class="link-icon" v-html="$feathericons[link.attributes.icon].toSvg()"></div>
              </div>
              <div class="">
                <div class="bold text-lg">
                  {{ link.attributes.title }}
                </div>
                <div class="">
                  {{ link.attributes.description }}
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '~/styles/theme.scss';

.link-container {
  background-color: $black;
  color: $white;
}

</style>
