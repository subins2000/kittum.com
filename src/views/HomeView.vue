<script setup>
import * as punycode from "punycode";

let host = window.location.host;
if (host.indexOf("xn--") === -1) {
  // For localhost, use sample "നോക്കി-ഇരുന്നോ-ഇപ്പോ.കിട്ടും.com"
  host = "xn-----63hb0ea5keawa0ewk5a7ljewhf.xn--rvc1b4aa2noa6f.com";
}
const hostInUnicode = punycode.toUnicode(host);

let siteName = () => {
  const withoutCom = hostInUnicode.slice(0, -4);
  return withoutCom.replace(/[-.]/g, " ");
};
</script>

<template>
  <main>
    <h1 class="title">{{ siteName() }}</h1>
    <h2>😌😌😌</h2>
  </main>
</template>

<style scoped>
main {
  text-align: center;
}

.title {
  font-size: 3.5rem;
}

p {
  margin: 1rem;
}
</style>
