import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { genre } from './modules';

// define your typings for the store state
export interface State {
  count: number,
  genres: Array<genre.IGenre>
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0,
    genres: []
  }
});

export function useStore() {
  return baseUseStore(key);
}