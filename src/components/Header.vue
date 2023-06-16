<template>
  <header class="flex">
    <h3 class="app-title"><span>r/awww</span>some!</h3>
    <div class="flex flex-row logos-wrapper">
      <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="32" height="32" />
      <img alt="Vite logo" class="logo" src="../assets/Vitejs-logo.svg" width="32" height="32" />
      <img alt="TS logo" class="logo" src="../assets/Typescript-logo.svg" width="32" height="32" />
      <img alt="ESLint logo" class="logo" src="../assets/ESLint-logo.svg" width="32" height="32" />
    </div>
  </header>
</template>


<style scoped>
.app-title {
  font-size: 2.5rem; font-weight: bold;
  color: rgb(196, 21, 21);
}

header {
  line-height: 1.5;
  padding: 10px;
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
}
</style>
