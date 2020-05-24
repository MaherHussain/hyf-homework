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
  day = today - 1 + day;
  console.log(weekdays[day]);

  if (day < 7) {
    return weekdays[day];
  } else {
    return weekdays[day % 7];
  }
}
eventDay = getEventWeekday(5);
console.log(" event day will be " + eventDay);
