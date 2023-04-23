<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const currentRoute = useRoute()
const router = useRouter()

const routes = router.options.routes.filter((route) => {
  return route.name
})
</script>

<template>
  <header class="bg-zinc-800 w-full h-32 flex items-center">
    <div class="container">
      <nav>
        <ul class="flex gap-4">
          <li v-for="(route, index) in routes" :key="index">
            <a
              class="font-bold text-xl text-white"
              :class="route.path === currentRoute.path ? 'underline' : ''"
              :href="route.path"
              >{{ route.name }}</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
