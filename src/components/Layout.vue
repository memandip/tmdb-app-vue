<template>
  <div class="divide-y divide-gray-100">
    <Nav>
      <NavItem v-for="genre in genres" :key="genre.key" href="/#" isActive>
        {{ genre.name }}
      </NavItem>
    </Nav>
    <!-- <List>
      <ListItem v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </List> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import { IGenre } from "../interfaces";
import Nav from "./common/Nav.vue";
import NavItem from "./common/NavItem.vue";
import List from "./common/List.vue";
import ListItem from "./common/ListItem.vue";

@Options({
  components: {
    Nav,
    NavItem,
    List,
    ListItem,
  },
})
export default class Layout extends Vue {
  genres: Array<IGenre> = [];

  async created() {
    const apiKey = process.env.VUE_APP_TMDB_API_KEY;
    const genreListApiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
    await axios
      .get(genreListApiUrl)
      .then(({ data }) => {
        if (data && data.genres) {
          this.genres = data.genres.splice(0, 13) as Array<IGenre>;
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  }
}
</script>