import { seedData } from './seed.js'
export const store = {
    state: {
        seedData
    },
    getTheActiveDay() {
        return this.state.seedData.find((day) => day.active == true);
    },
    setDayActive(day) {
        this.state.seedData.map((dayDetails) => dayDetails.abbvTitle == day ? dayDetails.active = true : dayDetails.active = false);
    },
    addNewEvent(event) {

        let day = this.getTheActiveDay();
        day.events.push({
            details: event,
            edit: false,
        });

    }
}