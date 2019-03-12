<template>
  <div class="app">
    <CalendarWeek/>
    <CalendarEntry/>
  </div>
</template>




<script>
import CalendarWeek from "./components/CalendarWeek.vue";
import CalendarEntry from "./components/CalendarEntry.vue";

export default {
  name: "App",
  components: {
    CalendarWeek,
    CalendarEntry
  }
};
</script>





// styling
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto");

.app {
  font-family: "Roboto", sans-serif;
  align-items: center;
  width: 100%;
  margin: 5% auto;
}
</style>
