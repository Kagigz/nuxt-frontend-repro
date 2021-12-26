<script setup lang="ts">
const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
    default: false,
  },
})
const emit = defineEmits(['close'])

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
      <NuxtLink class="nav-link nav-link-selected" to="#home"> HOME </NuxtLink>
      <NuxtLink class="nav-link" to="#"> ABOUT </NuxtLink>
      <NuxtLink class="nav-link" to="#"> ASSETS </NuxtLink>
      <NuxtLink class="nav-link" to="#"> COURSES </NuxtLink>
      <NuxtLink class="nav-link" to="#"> BLOG </NuxtLink>
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
