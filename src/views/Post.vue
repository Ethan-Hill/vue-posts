<template>
  <section class="py-20 container">
    <div v-if="post?.body">
      <article>
        <h1 class="text-4xl underline font-bold mb-4">{{ post.title }}</h1>

        <p>
          {{ post.body }}
        </p>
      </article>
    </div>
    <div v-else>
      <p>No post found</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

interface Post {
  id: number
  title: string
  body: string
  userId: number
  tags: string[]
  reactions: number
}

const post = ref<Post>()

const data: Post = await fetch('https://dummyjson.com/post/' + route.params.id).then((res) =>
  res.json()
)
post.value = data
</script>
