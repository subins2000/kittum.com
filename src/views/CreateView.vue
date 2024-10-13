<template>
  <h1>ലിങ്ക് സൃഷ്ടിക്കാൻ</h1>
  <form class="main_area">
    <input type="text" v-model="subdomain" placeholder="എന്ത് കിട്ടും?" @input="validateInput" />
    <button @click="submit" class="submit_btn">സൃഷിടിക്കുക</button>
  </form>
  <div v-if="newLink" @click="copyURL(newLink)" class="new_link_area">
    <b>{{ newLink }}</b>
    <p class="copy-btn">Copy</p>
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
    submit(event) {
      event.preventDefault();
      const slug = this.subdomain
        .split(" ")
        .filter((x) => x != "")
        .join("-");
      this.newLink = slug + ".കിട്ടും.com";
    },
    async copyURL(mytext) {
      try {
        await navigator.clipboard.writeText(mytext);
        alert("ലിങ്ക് കിട്ടിയിട്ടുണ്ട് !");
      } catch ($e) {
        alert("ലിങ്ക് കിട്ടിയില്ല !");
      }
    },
    validateInput() {
      const regex = /[^a-zA-Z0-9-_\u0D00-\u0D7F]/g;
      this.subdomain = this.subdomain.replace(regex, "");
    }
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
  cursor: pointer;
}

.copy-btn {
  background-color: #656565;
  color: white;
  border-radius: 4px;
  margin-left: auto;
  padding: 2px;
  padding-inline: 4px;
}
</style>
