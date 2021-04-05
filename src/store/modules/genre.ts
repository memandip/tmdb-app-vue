import { State } from "..";
import { genre } from "../../api";

export interface IGenre {
  id: number;
  name: string;
}

const state = () => ({
  genres: []
});

const getters = {};

const actions = {
  async fetchGenres({ commit }) {
    genre.getAll((genres: IGenre) => {
      commit("setGenres", genres);
    });
  }
};

const mutations = {
  setGenres(state: State, genres: Array<IGenre>) {
    state.genres = genres;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}