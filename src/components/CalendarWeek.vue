

<template>
  <div class="CalendarWeek">
    <CalendarDay v-for="day in sharedState" :key="day.id" :day="day"/>
  </div>
</template>



<script>
import CalendarDay from "./CalendarDay.vue";
import { store } from "../store.js";
export default {
  name: "CalendarWeek",
  data() {
    return {
      sharedState: store.state.seedData
    };
  },
  components: {
    CalendarDay
  }
};
</script>


<style lang="scss" scoped>
.CalendarWeek {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
</style>

