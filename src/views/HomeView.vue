<script setup>
import { useSSRContext } from "vue";

import { getSiteName } from "../utils/utils-es6";

let host;
if (import.meta.env.SSR) {
  const ctx = useSSRContext();
  host = ctx.host;
} else {
  host = window.location.host;
}

const siteName = getSiteName(host);
</script>

<template>
  <main>
    <h1 class="title">{{ siteName }}</h1>
    <h2>😌😌😌</h2>
    <footer>
      <p><a href="https://github.com/subins2000/kittum.com">Source Code</a></p>
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
  min-height: 100vh;
}
footer .title {
  font-size: 3.5rem;
}

p {
  margin: 1rem;
}
</style>
