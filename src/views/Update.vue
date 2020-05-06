<template>
  <div class="Update">
    <h1>Update post page</h1>
    <form>
      <input type="text" v-model="post.description" placeholder="Type a description here" required>
      <input type="file" ref="fileInput" accept="image/*" v-on:change="previewImage"> <!-- skjult via styling -->
      <button class="choose-image" type="button" v-on:click="triggerChooseImg">Choose Image</button>
      <div>
        <img :src="post.image" class="image-preview">
      </div>
      <button type="button" v-on:click="updatePost">Update post</button>
    </form>
  </div>
</template>

<script>
import { postRef } from '../firebase-db'

export default {
  name: 'Update',
  props: {
    post: Object
  },
  methods: {
    triggerChooseImg () { // Trigger den knap der hedder vælg fil
      this.$refs.fileInput.click() // knap der selv er lavet
    },
    previewImage () {
      const imageFile = this.$refs.fileInput.files[0]
      const fileReader = new FileReader() // læser filen, så vi kan få en src ud af den så vi kan vise det er et img tag
      fileReader.onload = (event) => {
        this.post.image = event.target.result // smider billedet ind i selve variablen
      }
      fileReader.readAsDataURL(imageFile)
    },
    updatePost () {
      postRef.doc(this.post.id).set({
        description: this.post.description,
        image: this.post.image
      })
      this.$router.push('/')
    }
  }
}
</script>

<style>
form {
  padding: 2em 1em 2.5em;
}

button {
  text-align: center;
  cursor: pointer;
  border: none;
  padding: 12px 15px;
  font-size: 1em;
  border-radius: 0;
  color: var(--text-color-light);
  background-color: var(--secondary);
  width: 100%;
  max-width: 350px;
}

button.choose-image {
  background-color: var(--primary);
}

/*article button {
  text-align: center;
  cursor: pointer;
  border: none;
  padding: 10px 8px;
  border-radius: 0;
  color: var(--text-color-light);
  background-color: var(--green);
  width: 40%;
}*/

input {
  margin: 1em auto;
  width: 100%;
  max-width: 350px;
  padding: 12px 15px;
  box-sizing: border-box;
  display: block;
}

input[type="file"] {
    display: none;
}

.image-preview {
  max-width: 350px;
  width: 100%;
  padding: 1em 0;
}
</style>
