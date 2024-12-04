<script setup lang="ts">
// definePageMeta({
//   middleware: 'simpleRequest'
// })

// const db = hubDatabase()

// const simpleRequest = ref<number>('')

const simpleRequest = ref('')

const doSimpleRequest = async () => {
  const request = await $fetch('/api/simpleRequest')

  console.log('simpleRequest:', request)

  simpleRequest.value = request.message

  console.log('log from fe-1-test branch')

  // console.log('db:', db);

  // npx wrangler d1 execute nuxt-hub-test-1 --remote --command "SELECT name FROM sqlite_master WHERE type='table';"
}
</script>

<template>
  <div class="text-center mt-5">
    <h2>{{ !simpleRequest ? 'click "Do simple request" btn to see a message!' : simpleRequest }}</h2>
    <button @click="doSimpleRequest">
      Do simple request
    </button>
  </div>
</template>
