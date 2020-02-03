<template>
  <div id="app">
    <AppToolbar></AppToolbar>

    <aside class="drawer">
      <nav>
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" :to="{'name': 'admin'}">Admin</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
      </nav>
    </aside>

    <main>
      <router-view class="page"/>
    </main>
  </div>
</template>

<script>
import AppToolbar from '@/components/AppToolbar.vue'

export default {
  components: {
    AppToolbar
  }
}
</script>


<style>
body { margin: 0; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: grid;
  grid-template-rows: 64px 1fr;
  grid-template-columns: 240px 1fr;
  grid-template-areas: 
            "header header"
            "drawer main";
}

#app > main {
  display: flex;
  grid-area: main;
  height: calc(100vh - 64px);
}

.page { 
  width: 100%;
  overflow: hidden auto; 
}

.drawer {
  grid-area: drawer;
  background: #313131;
  color: #e7e7e7;
  width: 240px;
}

.drawer nav {
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
}
.nav-link {
  padding: 8px 0;
  color: white;
  text-decoration: none;
}

.home.page {
  text-align: center;
}
</style>
