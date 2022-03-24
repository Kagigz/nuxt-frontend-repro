<script setup lang="ts">
const navbar = ref(null)
const route = useRoute()

const navbarState = reactive({
  background: '',
  modalShowing: false,
})

const links = [
  {
    id: 'index',
    path: '',
    label: 'HOME',
  },
  {
    id: 'about',
    path: 'about',
    label: 'ABOUT',
  },
]

const updateScroll = () => {
  const scrollPosition = window.scrollY
  const navbarHeight = navbar.value.clientHeight
  if (scrollPosition > navbarHeight) navbarState.background = 'background-white'
  else navbarState.background = ''
}

const getNavbarClass = () => {
  return `${'navbar py-2 px-4 md:py-6 md:px-8' + ' '}${navbarState.background}`
}

const displayMenuModal = () => {
  navbarState.modalShowing = true
}

const closeMenuModal = () => {
  navbarState.modalShowing = false
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})
</script>

<template>
  <div ref="navbar" :class="getNavbarClass()">
    <NavModal :visible="navbarState.modalShowing" @close="closeMenuModal" />
    <div class="w-full flex justify-end">
      <!-- NAV LINKS -->
      <div class="hidden md:flex w-full flex-grow items-center justify-end">
        <div v-for="n in links" :key="n.id">
          <NuxtLink
            :class="`nav-link ${
              route.name === n.id ? 'nav-link-selected' : ''
            }`"
            :to="`/${n.path}`"
          >
            {{ n.label }}
          </NuxtLink>
        </div>
      </div>

      <!-- TOGGLE BUTTON -->
      <div class="block nav-toggle md:hidden" @click="displayMenuModal">
        <div v-html="$feathericons['menu'].toSvg()"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

.nav-toggle {
  cursor: pointer;
}
</style>
