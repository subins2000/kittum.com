<script setup>
import { getSiteInfo } from "../utils";
import { RouterLink, RouterView } from "vue-router";
const host = window.location.host;
const { title, subtitle } = getSiteInfo(host);
</script>

<template>
  <main>
    <div>
      <h1 class="title">{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
    </div>
    <footer>
      <p><a href="https://github.com/subins2000/kittum.com">ഉറവിടം</a></p>
      <p><router-link to="/create">ലിങ്കുണ്ടാക്കൂ</router-link></p>
    <p><router-link to="/about">ഉപയോഗം</router-link></p>  <!-- p tag is added to get the default style  -->
    </footer>
  </main>
</template>

<style scoped>
main {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20vh;
  min-height: 100vh;
  padding: 2vh;
}
footer .title {
  font-size: 3.5rem;
}

p {
  margin: 1rem;
}
</style>
