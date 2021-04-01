<template>
  <div class="hello">
    <h1>Genre List</h1>
    <ul v-if="genres.length">
      <li v-for="g in genres" :key="g.id">{{ g.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Options, Vue } from "vue-class-component";

export interface IGenre {
  id: number;
  name: string;
}

@Options({
  props: {
    msg: String,
    genres: Array,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
  genres: Array<IGenre> = [];
  buttonLabel: string = "Fetch Genres";

  async mounted() {
    this.genres = await this.getGenres();
  }

  async getGenres(): Promise<Array<IGenre>> {
    const apiKey = process.env.VUE_APP_TMDB_API_KEY;
    return await axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
      )
      .then(({ data }) => {
        if (data && data.genres) {
          return data.genres;
        }
        return [];
      })
      .catch((err) => {
        console.log("err", err);
        return [];
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
