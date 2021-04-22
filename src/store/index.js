import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filters:{
      gender: '',
      age: [0,65],
      nat: ''
    }
  },
  mutations: {
    setAgeFilter(state,ageArr){
      if (ageArr.length != 2) return console.log('la edad no es una array valido')
      state.filters.age = ageArr
    }
  },
  actions: {
  },
  modules: {
  }
})
