<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Listado</router-link> |
      <router-link to="/crear">Crear</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
