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
      <p><a href="/create">ലിങ്കുണ്ടാക്കൂ</a></p>
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
