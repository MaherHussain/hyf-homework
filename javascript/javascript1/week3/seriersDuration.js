const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function logOutSeriesText() {
  const ageInHours = 80 * 365 * 24;
  for (i = 0; i < seriesDurations.length; i++) {
    let title = seriesDurations[i]["title"];
    //console.log(title);
    let daysPropInHours = seriesDurations[i]["days"] * 24;
    //console.log(daysPropInHours);

    let minutesInHour = seriesDurations[i]["minutes"] / 60;

    let percentageOfAnAverageLifespan =
      ((daysPropInHours + minutesInHour + seriesDurations[i]["hours"]) /
        ageInHours) *
      100;

    console.log(
      title + " " + percentageOfAnAverageLifespan.toFixed(3) + "% of my life"
    );

    seriesDurations[i].percentage = percentageOfAnAverageLifespan;
  }
}
function totalpre(seriesDurations, percentage) {
  return seriesDurations.reduce(function (r, a) {
    return r + a[percentage];
  }, 0);
}
logOutSeriesText();

let total = totalpre(seriesDurations, "percentage");
console.log("In total that is " + total.toFixed(2) + "% of my life");
