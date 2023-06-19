<script setup lang="ts">
defineProps<{filter: string, onSetFilter: (_: string) => void;}>()
</script>

<template>
  <header class="flex">
    <div class="flex flex-row logos-wrapper">
      <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="32" height="32" />
      <img alt="Vite logo" class="logo" src="../assets/Vitejs-logo.svg" width="32" height="32" />
      <img alt="TS logo" class="logo" src="../assets/Typescript-logo.svg" width="32" height="32" />
      <img alt="ESLint logo" class="logo" src="../assets/ESLint-logo.svg" width="32" height="32" />
    </div>

    <h3 class="app-title"><span>r/awww</span>some!</h3>
    
    <select 
      name="filter" id="filter" :value="filter" 
      @change="(e: Event) => $emit('setFilter', (e.target as HTMLInputElement).value)"
    >
      <optgroup label="Filter Posts by">
        <option value="top">Top</option>
        <option value="new">New</option>
        <option value="hot">Hot</option>
        <option value="rising">Rising</option>
      </optgroup>
    </select>
  </header>
</template>


<style scoped>
header {
  line-height: 1.5;
  padding: 10px 10px 20px;
  --primary-color: rgb(196, 21, 21);
}
.app-title {
  font-size: 2.5rem; font-weight: bold;
  color: var(--primary-color);
}

#filter {
  color: white;
  font-weight: bold;
  font-size: 1rem;
  background-color: var(--primary-color);
  border-radius: 10px;
  border: 0;
  padding: 5px 10px;
}

.logos-wrapper {
  /* display: block; */
  max-width: 300px;
  /* margin: 0 auto 2rem; */
}

@media (min-width: 1024px) {
  .flex {flex-direction: row;}
  
  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  .app-title { order: 3; }
}
</style>
