<script setup lang="ts">
import Header from './components/Header.vue'
import PostItem from './components/PostItem.vue'
import { ref } from 'vue'
import type { Post, RedditPost } from './types';
import Loader from './components/Loader.vue';
const posts = ref<Post[]>([]);
const filter = ref('');
const afterId = ref('');

const fetchReddit = (filter = 'top', afterId = '') => {
  const url = `https://www.reddit.com/r/Awww/${filter}.json${
    afterId ? '?after=' + afterId : ''
  }`;

  return fetch(url)
    .then((res) => res.json())
    .catch(console.error);
};

function setPosts(data: Post[]) {
  posts.value = data;
}

const handleDataUpdate = (data: any) => {
    setPosts(
      data.children.map((postItem: {data: RedditPost}) => {
        const {
          title,
          thumbnail,
          is_video,
          permalink,
          ups,
          downs,
          num_comments,
        } = postItem.data;
        return {
          title,
          thumbnail,
          permalink: `https://www.reddit.com${permalink}`,
          is_video,
          ups,
          downs,
          num_comments,
          videoUrl: is_video && postItem.data.media?.reddit_video?.fallback_url,
        };
      })
    );
    afterId.value = data.after;
  };

fetchReddit(filter.value, afterId.value)
.then(res => handleDataUpdate(res.data))
</script>

<template>
  <Header />

  <main>
    <PostItem 
      v-for="(post, index) in posts" 
      :key="index" 
      :postItem="post"
    />
  </main>
  <Loader />
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
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
}
</style>
