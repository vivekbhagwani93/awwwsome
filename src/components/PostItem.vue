<script setup lang="ts">
import type { Post } from '@/types';

defineProps<{
 postItem : Post
}>()
function goToPost(link: string) {window.open(link, '_blank')}
</script>

<template>
  <div class="post-item" >
    <div>
      <h3 class="post-title"
        @click="goToPost(postItem.permalink)"
      >{{postItem.title}}</h3>
      <p class="flex flex-row post-info">
        <div class="flex flex-row justify-start">
          {{postItem.ups}} <img 
            src="@/assets/up-arrow.svg" 
            width="20" height="20"
          >
        </div>
        
        <div class="flex flex-row justify-start">
          {{postItem.downs}} <img 
            src="@/assets/down-arrow.svg" 
            width="20" height="20"
            style="transform: rotateX(180deg)"
          >
        </div>

        <div class="flex flex-row justify-start"> 
        {{postItem.num_comments}} <img 
          src="@/assets/comment-dots.svg" 
          width="20" height="20"
        ></div>

        <div>{{postItem.subreddit_name_prefixed}}</div>
      </p>
    </div>
    
    <img 
      v-if="!postItem.is_video"
      class="thumbnail" 
      :src="postItem.thumbnail" 
      alt='image not available' 
      @click="postItem.videoUrl && goToPost(postItem.videoUrl)"
    />
    <video controls
      v-if="postItem.is_video" 
      class="thumbnail" 
      :src="postItem.videoUrl" 
    />
  </div>
</template>

<style scoped>
.post-item {
  padding: 10px;
  /* border: 1px solid rgb(202, 202, 202); */
  background-color: rgba(0, 0, 0, 1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.post-item:hover {
  scale: 1.05;
}
.post-title {
  margin-bottom: 10px; 
  font-weight: bold; 
  font-size: 1.5rem;
  overflow: hidden;
  height: 5rem;
  text-overflow: ellipsis;
  cursor: pointer;
}
.post-title:hover {
  text-decoration: underline;
}
.post-info {
  font-size: 1.3rem;
  margin-bottom: 5px;
}
.thumbnail {
  width: 100%;
  font-size: 5rem;
  line-height: 9rem;
  text-align: center;
  max-height: 400px;
}
</style>
