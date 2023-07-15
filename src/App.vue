<template>
   <div id="nav">
      <router-link to="/">Main</router-link> |
      <router-link to="/sample">Sample</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>
