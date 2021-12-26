<script setup lang="ts">
const routeModal = useRoute()

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
    default: false,
  },
})
const emit = defineEmits(['close'])

const linksModal = [
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
  {
    id: 'assets',
    path: 'assets',
    label: 'ASSETS',
  },
  {
    id: 'courses',
    path: 'courses',
    label: 'COURSES',
  },
  {
    id: 'blog',
    path: 'blog',
    label: 'BLOG',
  },
]

const linksMoreModal = [
  {
    id: 'ebook',
    path: 'ebook',
    label: 'EBOOK',
  },
  {
    id: 'talks',
    path: 'talks',
    label: 'TALKS',
  },
  {
    id: 'links',
    path: 'links',
    label: 'LINKS',
  },
]

const navbarModalState = reactive({
  dropdownVisible: false,
  dropdownIcon: 'chevron-down',
})

const toggleDropdown = () => {
  navbarModalState.dropdownVisible = !navbarModalState.dropdownVisible
  if (navbarModalState.dropdownVisible)
    navbarModalState.dropdownIcon = 'chevron-up'
  else navbarModalState.dropdownIcon = 'chevron-down'
}
</script>

<template>
  <div v-if="props.visible" class="nav-modal py-2 px-4 md:py-6 md:px-8">
    <div class="w-full flex justify-end">
      <!-- TOGGLE BUTTON -->
      <div class="block nav-toggle md:hidden" @click="emit('close')">
        <div v-html="$feathericons['menu'].toSvg()"></div>
      </div>
    </div>
    <!-- NAV LINKS -->
    <div class="nav-links h-full flex flex-col justify-center items-center">
      <div v-for="n in linksModal" :key="n.id">
        <NuxtLink
          :class="`nav-link ${
            routeModal.name === n.id ? 'nav-link-selected' : ''
          }`"
          :to="`/${n.path}`"
        >
          <span @click="emit('close')">{{ n.label }}</span>
        </NuxtLink>
      </div>

      <div class="nav-dropdown">
        <div class="nav-dropdown-button" @click="toggleDropdown">
          MORE
          <div
            class="flex items-center icon-small ml-1"
            v-html="$feathericons[navbarModalState.dropdownIcon].toSvg()"
          ></div>
        </div>
        <ul
          v-if="navbarModalState.dropdownVisible"
          class="py-1 nav-dropdown-menu md:mt-6"
          aria-labelledby="dropdownButton"
        >
          <li v-for="n in linksMoreModal" :key="n.id">
            <NuxtLink
              :class="`nav-link nav-dropdown-link ${
                routeModal.name === n.id ? 'nav-link-selected' : ''
              }`"
              :to="`/${n.path}`"
            >
              <span @click="emit('close')">{{ n.label }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/styles/theme.scss';

.nav-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: $white;
}

.nav-links {
}

.nav-link {
  margin: 16px 16px;
  font-size: 1.8em;
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
  margin: 16px 16px;
  font-size: 1.8em;
  display: inline-block;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.nav-dropdown-menu {
  padding: 16px 8px 8px 8px;
  text-align: center;
  min-width: 100%;
  transition: all 0.2s ease-in-out;
  background-color: $white;
}

.nav-dropdown-link {
  margin: 4px 0px;
}

.nav-toggle {
  cursor: pointer;
}
</style>
