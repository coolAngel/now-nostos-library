<template>
  <div>
    <h1>Books</h1>
    <router-link to="/admin/books/create">add</router-link>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
name: 'admin'
}
</script>

<style>

</style>