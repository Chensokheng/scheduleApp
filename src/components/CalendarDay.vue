<template>
  <div class="CalendarDay" @click="setActive(day.abbvTitle)">
    <div class="calendarTitle">{{day.abbvTitle}}</div>
    <CalendarEvent v-for="day in day.events" :key="day.id" :event="day"/>
  </div>
</template>
<script>
import CalendarEvent from "./CalendarEvent.vue";
import { store } from "../store";
export default {
  name: "CalendarDay",
  props: ["day"],
  components: {
    CalendarEvent
  },
  methods: {
    setActive(day) {
      store.setDayActive(day);
      console.log(store.getTheActiveDay());
    }
  }
};
</script>
<style lang="scss" scoped>
.CalendarDay {
  background: #333;
  cursor: pointer;
  color: #fff;
  margin: 10px;
  box-shadow: 0px 1px 5px rgba(104, 104, 104, 0.8);
  .calendarTitle {
    padding: 10px 0px;
    text-align: center;
    background: black;
  }
}
</style>

