<script setup>
import { useSSRContext } from "vue";

import { getSiteInfo } from "../utils/utils-es6";

let host;
if (import.meta.env.SSR) {
  const ctx = useSSRContext();
  host = ctx.host;
} else {
  host = window.location.host;
}

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
