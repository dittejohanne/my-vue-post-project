<template>
  <div class="grid-container">
    <article v-for="post in posts" :key="post.id">
      <div>
      <img :src="post.image" alt />
      <h3>{{post.description}}</h3>
      <router-link :to="{name: 'Update', params: {post:post} }">
        <button type="button">Update</button>
        </router-link>
        <button type="button" v-on:click="toDeletePost(post)">Delete</button>
      </div>
    </article>
  </div>
</template>

<script>
import { postRef } from '../firebase-db'
export default {
  data () {
    return {
      posts: []
    }
  },
  firestore: {
    posts: postRef
  },
  methods: {
    toDeletePost (post) {
      const id = post.id
      postRef.doc(id).delete()
    }
  }
}
</script>

<style>
/* ---------- Grid container ---------- */
.grid-container {
  display: grid;
  grid-template-columns: 100%;
  padding: 10px;
}

@media (min-width: 600px) {
  .grid-container {
    grid-template-columns: 50% 50%;
  }
}

@media (min-width: 992px) {
  .grid-container {
    grid-template-columns: 33.33% 33.33% 33.33%;
  }
}

.grid-container > article {
  text-align: center;
  padding: 10px;
}

.grid-container > article img {
  max-width: 300px;
  width: 100%;
}

.grid-container > article h3 {
  font-weight: 200;
  margin: 0 0 1.5em;
}
</style>
