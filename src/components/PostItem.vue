<script setup lang="ts">
import type { Post } from '@/types';

defineProps<{
 postItem : Post
}>()
function goToPost(link: string) {window.open(link, '_blank')}
</script>

<template>
  <div class="post-item"
    @click="goToPost(postItem.permalink)"
  >
    <div>
      <h3 class="post-title">{{postItem.title}}</h3>
      <p class="post-info">
        {{postItem.ups}} <img 
          src="@/assets/up-arrow.svg" 
          width="20" height="20"
        > 
        {{postItem.downs}} <img 
          src="@/assets/up-arrow.svg" 
          width="20" height="20" 
          style="transform: rotateY(180deg)"
        > 
        {{postItem.num_comments}} <img 
          src="@/assets/comment-dots.svg" 
          width="20" height="20"
        > 
      </p>
    </div>
    
    <img 
      class="thumbnail" 
      :src="postItem.thumbnail" 
      alt='image not available' 
      @click="postItem.videoUrl && goToPost(postItem.videoUrl)"
    />
  </div>
</template>

<style scoped>
.post-item {
  padding: 10px;
  border: 1px solid rgb(202, 202, 202);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.post-item:hover {
  scale: 1.05;
  cursor: pointer;
}
.post-title {
  margin-bottom: 10px; 
  font-weight: bold; 
  font-size: 1.5rem;
  overflow: hidden;
  height: 5rem;
  text-overflow: ellipsis;
}
.post-info {font-size: 1.3rem;}
.thumbnail {
  width: 100%;
  font-size: 5rem;
  line-height: 9rem;
  text-align: center;
}
</style>
