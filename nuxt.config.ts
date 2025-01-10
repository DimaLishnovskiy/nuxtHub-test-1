// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/modules
  modules: ['@nuxthub/core', '@nuxt/eslint'],

  // https://devtools.nuxt.com
  devtools: { enabled: true },

  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "~/assets/global.scss" as *;'
  //       }
  //     }
  //   }
  // },

  css: ['~/assets/global.scss'],

  // Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    public: {
      // Can be overridden by NUXT_PUBLIC_HELLO_TEXT environment variable
      helloText: 'Hello from the Edge 👋',
    },
  },
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-07-30',

  // https://hub.nuxt.com/docs/getting-started/installation#options
  hub: {
    database: true,
  },

  typescript: {
    // typeCheck: true,
    // hoist: [
    //   "nitropack/types",
    //   "nitropack",
    //   "defu",
    //   "h3",
    //   "consola",
    //   "ofetch",
    //   "@unhead/vue",
    //   "@nuxt/devtools",
    //   "vue",
    //   "@vue/runtime-core",
    //   "@vue/compiler-sfc",
    //   "vue-router",
    //   "vue-router/auto-routes",
    //   "unplugin-vue-router/client",
    //   "@nuxt/schema",
    //   "nuxt"
    // ]
  },

  // https://eslint.nuxt.com
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
      },
    },
  },
})
