const travelInformation = {
  speed: 50,
  destinationDistance: 465,
};
//console.log(travelInformation["speed"]);
function travelInfo(travelInformation) {
  speed = travelInformation.speed;
  destinationDistance = travelInformation.destinationDistance;

  let Totaltime = destinationDistance / speed;
  console.log();

  const hours = Math.floor(Totaltime);
  const minutes = Math.round(Totaltime - hours) * 60;

  return hours + " hours " + " and " + minutes + " minutes";
}
const travelTime = travelInfo(travelInformation);
console.log(travelTime);
