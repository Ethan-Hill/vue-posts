<template>
  <section class="py-20 container">
    <h1 class="text-5xl font-bold">Posts</h1>

    <div v-if="posts" class="grid grid-cols-3 gap-12 my-10">
      <a
        v-for="post in posts.posts"
        :key="post.id"
        :href="'/posts/' + post.id"
        class="p-3 border-4 rounded border-zinc-700 hover:bg-zinc-700 transition-colors"
      >
        <article>
          <h1 class="text-xl font-bold">{{ post.title }}</h1>
        </article>
      </a>
    </div>
    <div v-else>
      <p>No posts found</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface PostsData {
  posts: Post[]
  total: number
  skip: number
  limit: number
}

interface Post {
  id: number
  title: string
  body: string
  userId: number
  tags: string[]
  reactions: number
}

const posts = ref<PostsData>()

const data: PostsData = await fetch('https://dummyjson.com/posts').then((res) => res.json())
posts.value = data
</script>
