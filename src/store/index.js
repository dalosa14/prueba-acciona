import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filters: {
      gender: "",
      age: [0, 65],
      nat: "",
    },
    profiles: [],
    nationalities: ["es", "mc"],
  },
  getters: {
    getAllNationalities(state) {
      return state.nationalities;
    },
    getAllProfiles(state) {
      return state.profiles;
    },
  },
  mutations: {
    setAgeFilter(state, ageArr) {
      if (ageArr.length != 2) return;
      state.filters.age = ageArr;
    },
    setProfiles(state, profiles) {
      Vue.set(state, "profiles", profiles);
    },
  },
  actions: {
    async getProfiles(context) {
      try {
        const profiles = await Vue.axios.get(
          "https://randomuser.me/api/?results=100"
        );
        return context.commit("setProfiles", profiles.data.results);
      } catch (error) {
        console.log(error);
        return;
      }
    },
  },
  modules: {},
});
