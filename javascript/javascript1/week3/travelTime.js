const travelInformation = {
  speed: 50,
  destinationDistance: 465,
};
//console.log(travelInformation["speed"]);
function travelInfo(travelInformation) {
  speedMinutes = travelInformation["speed"] / 60;
  destinationDistance = travelInformation["destinationDistance"];

  let time = Math.floor(destinationDistance / speedMinutes);
  minutes = time % 60;
  hours = (time - minutes) / 60;

  console.log(time);

  return time;
}
const travelTime = travelInfo(travelInformation);
console.log(hours + " hours " + " and " + minutes + " minutes");
