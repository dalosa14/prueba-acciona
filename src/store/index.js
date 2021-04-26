import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filters: {
      gender: "",
      age: [0, 65],
      nats: [],
    },
    profiles: [],
    nationalities: [],
    favs:[]
  },
  getters: {
    getAllNationalities(state) {
      return state.nationalities;
    },
    getAllProfiles(state) {
      return state.profiles;
    },
    getProfileById(state) {
      return id => state.profiles.find((profile)=>profile.login.uuid == id)
      
    },
    getFavProfiles(state,getters) {
      return state.profiles.filter((profile)=>getters.isFavProfile(profile.login.uuid))
      
    },
    isFavProfile(state) {
      return id => state.favs.includes(id)
      
    },
    getAllProfilesWithFilters(state) {
      let filteredProfiles = state.profiles;
      let { gender, age } = state.filters;
      if (gender !== "any") {
        if (gender === "male")
          filteredProfiles = filteredProfiles.filter(
            (profile) => profile.gender === "male"
          );
        if (gender === "female")
          filteredProfiles = filteredProfiles.filter(
            (profile) => profile.gender === "female"
          );
      }
      filteredProfiles = filteredProfiles.filter(
        (profile) => profile.dob.age > age[0] && profile.dob.age < age[1]
      );
      if (state.filters.nats.length != 0) {
        filteredProfiles = filteredProfiles.filter((profile) =>
          state.filters.nats.includes(profile.nat)
        );
      }

      return filteredProfiles;
    },
  },
  mutations: {
    setAgeFilter(state, ageArr) {
      state.filters.age = ageArr;
    },
    setGenderFilter(state, gender) {
      state.filters.gender = gender;
    },
    setProfiles(state, profiles) {
      state.profiles = profiles;
    },
    setNats(state, natsArr) {
      state.nationalities = natsArr;
    },
    setSelectedNats(state, selectedNats) {
      state.filters.nats = selectedNats;
    },
    addProfileFav(state, id) {
      state.favs.push(id);
    },
    removeProfileFav(state, id) {
      state.favs = state.favs.filter(fav=>fav !=id);
    },
  },
  actions: {
    async getProfiles(context) {
      try {
        const profiles = await Vue.axios.get(
          "https://randomuser.me/api/?results=200"
        );
        return context.commit("setProfiles", profiles.data.results);
      } catch (error) {
        console.log(error);
        return;
      }
    },
    async getNationalities(context) {
      try {
        const nations = await Vue.axios.get(
          "https://raw.githubusercontent.com/umpirsky/country-list/master/data/es/country.json"
        );
        return context.commit("setNats", nations.data);
      } catch (error) {
        console.log(error);
        return;
      }
    },
    
  },
  modules: {},
});
