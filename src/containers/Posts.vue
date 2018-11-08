<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.title">
        <h3>{{ post.title }}</h3>
        <p>{{post.text}}</p>
        <small>{{post.time}}</small>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Posts',
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  }
}
</script>
