import { defineNuxtConfig } from '@nuxt/bridge-edge'

export default defineNuxtConfig({
  buildModules: ['nuxt-windicss', '@vueuse/core/nuxt', '@nuxt/bridge-edge', '@nuxtclub/feathericons'],
  css: ['~/styles/main.scss', '~/styles/main.scss'],
  target: 'static',
  components: true,
  bridge: {
    vite: true,
  },
  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition

      const findEl = async (hash, x) => {
        return document.querySelector(hash)
          || new Promise((resolve, reject) => {
            if (x > 50)
              return resolve()

            setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
          })
      }

      if (to.hash) {
        const el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style)
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })

        else
          return window.scrollTo(0, el.offsetTop)
      }

      return { x: 0, y: 0 }
    },
  },
})
