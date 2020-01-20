<template>
  <div>
    <h1>Add a Boock</h1>
    <book-form></book-form>
  </div>

</template>

<script>

// @ is an alias to /src
import BookForm from '@/components/BookForm.vue'


export default {
  name: 'bookCreate',
  components: {
    BookForm
  }
}
</script>

<style>

</style>