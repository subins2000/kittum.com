<template>
  <h1>ലിങ്ക് സൃഷ്ടിക്കാൻ</h1>
  <div class="main_area">
    <input type="text" v-model="subdomain" placeholder="എന്ത് കിട്ടും?" />
    <button @click="submit" class="submit_btn">സൃഷിടിക്കുക</button>
  </div>
  <div v-if="newLink" class="new_link_area">
    <b>{{ newLink }}</b>
    <p class="copy-btn" @click="copyURL(newLink)">Copy</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      subdomain: "",
      newLink: "",
    };
  },
  methods: {
    submit() {
      const slug = this.subdomain
        .split(" ")
        .filter((x) => x != "")
        .join("-");
      this.newLink = slug + ".കിട്ടും.com";
    },
    async copyURL(mytext) {
      try {
        await navigator.clipboard.writeText(mytext);
        alert("Copied");
      } catch ($e) {
        alert("Cannot copy");
      }
    },
  },
};
</script>
<style>
body {
  display: flex;
  align-items: center;
}
h1 {
  text-align: center;
}
input {
  width: 100%;
  background-color: #f5f5f5;
  color: #242424;
  padding: 0.15rem 0.5rem;
  min-height: 40px;
  border-radius: 4px;
  outline: none;
  border: none;
  line-height: 1.15;
  box-shadow: 0px 10px 20px -18px;
  margin-right: 5px;
}

input:focus {
  border-bottom: 2px solid #5b5fc7;
  border-radius: 4px 4px 2px 2px;
}

input:hover {
  outline: 1px solid lightgrey;
}

.main_area {
  display: flex;
}

.submit_btn {
  min-height: 40px;
  border-radius: 4px;
  outline: none;
  border: none;
  line-height: 1.15;
  box-shadow: 0px 10px 20px -18px;
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  cursor: pointer;
}

.new_link_area {
  margin-top: 5rem;
  background-color: rgb(154, 251, 219);
  color: black;
  padding: 10px;
  border-radius: 4px;
  display: flex;
}

.copy-btn {
  background-color: var(--color-background);
  color: white;
  margin-left: 10px;
  cursor: pointer;
  padding: 2px;
}
</style>
