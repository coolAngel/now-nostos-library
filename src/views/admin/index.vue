<template>
  <div>
    <h1>Admin Area</h1>

  
    <router-link to="/admin/authors">Authors</router-link> | 
    <router-link to="/admin/books">Books</router-link>

    <hr>
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