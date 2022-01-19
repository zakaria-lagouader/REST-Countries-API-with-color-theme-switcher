import { createStore } from "vuex";

type State = {
  modeIsDark: boolean;
  currentRegion: string;
  searchValue: string;
  countries: any[];
};

export default createStore<State>({
  state: {
    modeIsDark: false,
    currentRegion: "EU",
    searchValue: "",
    countries: [],
  },
  getters: {
    filteredCountries: (state) => {
      return state.countries.filter((country) =>
        country.name
          .toLowerCase()
          .startsWith(state.searchValue.toLowerCase())
      );
    },
  },
  mutations: {
    toggleDarkMode(state) {
      state.modeIsDark = !state.modeIsDark;
    },
    setCurrentRegion(state, payload) {
      state.currentRegion = payload;
    },
    setCountries(state, payload) {
      state.countries = payload;
    },
    updateSearchValue: (state, value) => (state.searchValue = value),
  },
  actions: {
    toggleDarkMode: ({ commit }) => commit("toggleDarkMode"),
    setCurrentRegion: ({ commit }, payload) =>
      commit("setCurrentRegion", payload),
    setCountries: ({ commit }, payload) => commit("setCountries", payload),
  },
});
