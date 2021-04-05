<template>
  <Layout />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useStore } from "./store";
import Layout from "./components/Layout.vue";

@Options({
  components: {
    Layout,
  },
})
export default class App extends Vue {
  setup() {
    const store = useStore();
    store.state.count;
    store.state.genres;
  }

  created() {
    console.log(this.$store.state);
  }
}
</script>