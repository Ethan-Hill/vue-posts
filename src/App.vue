<script setup lang="ts">
import '@/assets/main.css'

import { RouterView } from 'vue-router'
import { useHead } from '@vueuse/head'

import Header from '@/components/Master/Header.vue'

useHead({
  title: 'Ethan post website',
  meta: [
    {
      name: 'description',
      content: 'This is a website full of dummy posts'
    }
  ]
})
</script>

<template>
  <Header />
  <suspense> <RouterView /></suspense>
</template>
