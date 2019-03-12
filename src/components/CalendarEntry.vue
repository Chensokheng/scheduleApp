<template>
  <div class="calendarEntry">
    <input type="text" placeholder="New Event" v-model="newEvent">
    <p v-if="inputError" class="danger">You must type something here</p>
    <p class="dayEvent">Day of Event : {{titleDay}}</p>
    <button @click="addNewEvent">Submit</button>
  </div>
</template>


<script>
import { store } from "../store.js";
export default {
  name: "CalendarEntry",
  data() {
    return {
      newEvent: "",
      inputError: false
    };
  },

  computed: {
    titleDay() {
      const day = store.getTheActiveDay();
      return day.fullTitle;
    }
  },
  methods: {
    addNewEvent() {
      let Event = this.newEvent.trim();

      if (Event != "") {
        console.log("success");
        this.inputError = false;
        store.addNewEvent(Event);
        this.newEvent = "";
      } else {
        this.inputError = true;
        this.newEvent = "";
      }
    }
  }
};
</script>



<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto");

.calendarEntry {
  width: 50%;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  margin-top: 100px;
  background: #fff;
  box-shadow: 0px 1px 5px rgba(104, 104, 104, 0.8);
  color: #333;
  border-radius: 8px;
  padding: 50px;
  .danger {
    color: red;
  }
  .dayEvent {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    color: #9d7775;
  }
  input {
    border: none;
    padding: 10px;
    width: 100%;
    border-bottom: 1px solid #3333;
    font-size: 20px;
  }
  ::placeholder {
    font-size: 20px;
  }
  button {
    background: #23d160;
    border: none;
    padding: 10px 30px;
    color: #ffff;
    font-size: 18px;
    box-shadow: 0px 1px 5px rgba(104, 104, 104, 0.8);
  }
}
</style>
