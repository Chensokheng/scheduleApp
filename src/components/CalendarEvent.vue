<template>
  <div class="calendarEvent" :style="randomColor">
    <p>{{event.details}}</p>
    <i class="far fa-trash-alt"></i>
    <i class="fas fa-pen-square"></i>
  </div>
</template>
<script>
export default {
  name: "CalendarEvent.vue",
  props: ["event"],
  computed: {
    randomColor() {
      const color = ["#209CEE", "#FFDD57", "#23D160", "#A751C1"];
      let randomColor = color[Math.floor(Math.random() * color.length)];
      return `background-color:${randomColor}`;
    }
  }
};
</script>
<style lang="scss" scoped>
.calendarEvent {
  width: 90%;
  margin: 0 auto;
  text-align: center;

  color: #000;

  margin-bottom: 5px;
  i {
    margin: 5px;
    color: #000;
    font-size: 16px;
    transition: 0.5s;
    cursor: pointer;
  }
  i:hover {
    transform: scale(1.1);
  }
}
</style>

