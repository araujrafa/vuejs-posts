<template>
  <div>
    <label>Titulo</label>
    <input v-model="title" type='text' />
    <label>Texto</label>
    <input v-model="text" type='text' />
    <label>Hora</label>
    <input v-model="time" type='text' />
    <button @click="sendPost">Salvar</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Editor',
  data: () => ({
    title: '',
    text: '',
    time: '',
  }),
  methods: {
    sendPost() {
      this.addPost({
        title: this.title,
        text: this.text,
        time: this.time,
      });
      this.title = '';
      this.text = '';
      this.time = '';
    },
    ...mapActions(['addPost']),
  }
}
</script>
