<template>
  <div>
      <form @submit.prevent="addBook">
          <input type="text" placeholder="Τίτλος">
          <input type="text" placeholder="Υποτίτλος">
          <br>
          <button type="submit">Add Book</button>
      </form>
  </div>
</template>

<script>
export default {
  methods: {
    addBook() {
      alert('Adding a new book the DB.')
    }
  }
}
</script>

<style>

</style>