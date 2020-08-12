<template>
    <div id="app">
        <dashboard-layout/>
    </div>
</template>
<script>
import DashboardLayout from "./layout/DashboardLayout";
export default {
  name: 'App',
  components: {
      DashboardLayout
  }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
