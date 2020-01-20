<template>
  <div>
      <form @submit.prevent="addAuthor">
          <input type="text" placeholder="Όνομα" v-model="name.first">
          <br>
          <input type="text" placeholder="Επόνυμο" v-model="name.last">
          <br>
          <input type="submit" value="Εισαγωγή">
      </form>
  </div>
</template>

<script>
export default {
  data: {
    name: { first: '', last: ''}
  },
  methods: {
    addAuthor: () => {
      alert('boo')
    }
  }
}
</script>

<style>

</style>