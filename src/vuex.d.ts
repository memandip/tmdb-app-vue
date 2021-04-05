// vuex.d.ts
import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { genre } from "./store/modules";

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    count: number,
    genres: Array<genre.IGenre>
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}