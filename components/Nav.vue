<script setup lang="ts">
const navbar = ref(null)

const navbarState = reactive({
  background: '',
})

const updateScroll = () => {
  const scrollPosition = window.scrollY
  const navbarHeight = navbar.value.clientHeight
  if (scrollPosition > navbarHeight) navbarState.background = 'background-white'
  else navbarState.background = ''
}

const getNavbarClass = () => {
  return `${'navbar py-2 px-4 md:py-6 md:px-8' + ' '}${navbarState.background}`
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})
</script>

<template>
  <div ref="navbar" :class="getNavbarClass()">
    <div class="w-full flex">
      <!-- NAV LINKS -->
      <div class="w-full flex flex-grow items-center justify-end">
        <NuxtLink class="nav-link nav-link-selected" to="#home">
          HOME
        </NuxtLink>
        <NuxtLink class="nav-link" to="#"> ABOUT </NuxtLink>
        <NuxtLink class="nav-link" to="#"> ASSETS </NuxtLink>
        <NuxtLink class="nav-link" to="#"> COURSES </NuxtLink>
        <NuxtLink class="nav-link" to="#"> BLOG </NuxtLink>
        <div class="nav-dropdown">
          <div class="nav-dropdown-button">
            MORE
            <div
              class="flex items-center icon-small ml-1"
              v-html="$feathericons['chevron-down'].toSvg()"
            ></div>
          </div>
          <ul
            class="py-1 nav-dropdown-menu md:mt-6 hidden"
            aria-labelledby="dropdownButton"
          >
            <li>
              <NuxtLink class="nav-link nav-dropdown-link" to="#">
                EBOOK
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="nav-link nav-dropdown-link" to="#">
                TALKS
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="nav-link nav-dropdown-link" to="#">
                LINKS
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- TOGGLE BUTTON -->
      <div class="block lg:hidden">
        <div v-html="$feathericons['menu'].toSvg()"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '~/styles/theme.scss';

.navbar {
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;
  font-family: $nav-font;
  font-weight: $nav-font-weight;
  color: $dark-grey;
}

.nav-link {
  margin: 0 16px;
  display: inline-block;
  cursor: pointer;
  background: no-repeat 0 100%;
  background-image: linear-gradient($dark-grey, $dark-grey);
  background-size: 0% 1px;
  transition: background-size 0.3s ease;
}

.nav-link-selected {
  background-size: 100% 1px;
}

.nav-link:hover {
  background-size: 100% 1px;
}

.nav-dropdown {
  position: relative;
}

.nav-dropdown-button {
  margin: 0 16px;
  display: inline-block;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.nav-dropdown-menu {
  position: absolute;
  top: 0;
  padding: 24px 8px 8px 8px;
  text-align: center;
  min-width: 100%;
  transition: all 0.2s ease-in-out;
  background-color: $white;
}

.nav-dropdown:hover .nav-dropdown-menu {
  display: block;
}

.nav-dropdown-menu:hover .nav-dropdown-menu {
  display: block;
}

.nav-dropdown-link {
  margin: 4px 0px;
}
</style>
