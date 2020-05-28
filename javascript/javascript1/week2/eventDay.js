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
  //day = today - 1 + day;

  /*if (day < 7) {
    return weekdays[day];
  } else {
    return weekdays[day % 7];
  }*/
  return weekdays[(day + today) % 7];
}
eventDay = getEventWeekday(5);
console.log(" event day will be " + eventDay);
/*function getEventWeekday(day) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date().getDay();
  return days[(day + today) % 7];
}
*/
