let weekdays = [
  "sunday",
  "monday",
  "tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let today = new Date().getDay();
let eventDay;
console.log(weekdays[today]);

function getEventWeekday(day) {
  return weekdays[(day + today) % 7];
}
eventDay = getEventWeekday(5);
console.log(" event day will be " + eventDay);
