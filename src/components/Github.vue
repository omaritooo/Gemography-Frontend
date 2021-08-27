<template>
  <div class="">
    <div
      class="justify-start px-10 my-10 text-black flex flex-row text-left w-4/5"
      v-for="repo in repos"
      :key="repo.id"
    >
      <div class="border-2 border-black flex content-evenly">
        <img
          width="200"
          height="200"
          class=""
          v-bind:src="repo.owner.avatar_url"
          alt=""
        />
      </div>
      <div id="cardcontainer" class="flex flex-col mx-20 justify-evenly">
        <a class="text-2xl font-bold">{{ repo.name }}</a>
        <p class="text-md">{{ repo.description }}</p>
        <div class="flex flex-row">
          <div class="flex flex-row">
            <div class="border-2 p-2 rounded-lg border-black">
              Stars: {{ repo.stargazers_count }}
            </div>
            <div class="border-2 p-2 rounded-lg border-black mx-6">
              Issues: {{ repo.stargazers_count }}
            </div>
          </div>
          <div class="text-left p-2">
            Submitted
            <span>
              {{ repo.created_at | moment("from", " 2017-11-22", true) }}</span
            >
            ago by {{ repo.owner.login }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const URL =
  "https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc&page=1";
export default {
  data() {
    return {
      repos: [],
      users: [],
    };
  },
  props: {
    id: Number,
    name: String,
    description: String,
    login: String,
    owner: Object,
    avatar_url: String,
    created_at: Date,
    stargazers_count: Number,
    html_url: String,
  },
  mounted() {
    axios.get(URL).then((response) => (this.repos = response.data.items));
    axios.get(URL).then((responsee) => (this.users = responsee.data.owner));
  },
  methods() {},
};
</script>

<style>
@import url("http://fonts.cdnfonts.com/css/segoe-ui-4");
body {
  font-family: "Segoe UI", sans-serif;
}
#cardcontainer {
  max-height: 30vh;
}
</style>