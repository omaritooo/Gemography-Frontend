<template>
  <div class="">
    <div
      class="flex flex-row justify-start w-3/5 px-10 my-10 text-left text-black"
      v-for="repo in repos"
      :key="repo.id"
    >
      <div
        id="avatar"
        class="flex justify-center border-2 border-black content-evenly"
      >
        <img
          width="150"
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
            <div class="p-2 border-2 border-black rounded-lg">
              Stars: {{ repo.stargazers_count }}
            </div>
            <div class="p-2 mx-6 border-2 border-black rounded-lg">
              Issues: {{ repo.stargazers_count }}
            </div>
          </div>
          <div class="p-2 text-left">
            Submitted
            <span>
              {{ repo.created_at | moment("from", " 2017-11-22", true) }}</span
            >
            ago by {{ repo.owner.login }}
          </div>
        </div>
      </div>
    </div>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import axios from "axios";
const URL =
  "https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc&page=";

export default {
  data() {
    return {
      repos: [],
      users: [],
      page: 1,
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

  methods: {
    infiniteHandler($state) {
      axios
        .get(URL, {
          params: {
            page: this.page,
          },
        })
        .then(({ data }) => {
          if (data.items.length) {
            this.page += 1;
            this.repos.push(...data.items);
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    },
  },
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
#avatar {
  min-width: 150px;
  max-width: 200px;
}
</style>