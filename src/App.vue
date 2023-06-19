<script setup lang="ts">
import Header from './components/Header.vue'
import PostItem from './components/PostItem.vue'
import { ref } from 'vue'
import type { Post, RedditApiData } from './types';
import { mapDataToPosts } from './types';
import Loader from './components/Loader.vue';

const posts = ref<Post[]>([]);
const filter = ref('top');
const afterId = ref('');

const fetchReddit = () => {
  const url = `https://www.reddit.com/r/Awww/${filter.value}.json${
    afterId.value ? '?after=' + afterId.value : ''
  }`;

  return fetch(url)
    .then((res) => res.json())
    .then(res => handleDataUpdate(res.data as RedditApiData))
    .catch(console.error);
};

function setPosts(data: Post[], append: boolean = false) {
  append ? posts.value.push(...data) : posts.value = data
}
function setFilter(_: string) {
  filter.value = _
  afterId.value = ''
  setPosts([])
  // fetchReddit()
}

const handleDataUpdate = (data: RedditApiData) => {
    setPosts(mapDataToPosts(data), posts.value.length > 0);
      
    afterId.value = data.after;
  };

// fetchReddit();
</script>

<template>
  <Header 
    :filter="filter" @setFilter="setFilter" 
  />

  <main>
    <PostItem 
      v-for="(post, index) in posts" 
      :key="index" 
      :postItem="post"
    />
  </main>
  <Loader @fetch="fetchReddit"/>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media screen and (min-width: 720px) {
  main {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 1080px) {
  main {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (min-width: 1280px) {
  main {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
}
</style>
