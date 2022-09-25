<script setup>
import { getSiteInfo } from "../utils";

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
      <p><router-link to="/usage">ഉപയോഗം</router-link></p>
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
  max-width: 500px;
  margin: 0 auto;
  padding: 2vh;
}
footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

p {
  margin: 1rem;
}
</style>
