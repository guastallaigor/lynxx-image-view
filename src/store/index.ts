import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import imageStore from "./image-store";

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    imageStore
  },
  strict: process.env.NODE_ENV !== "production"
});

export default store;
