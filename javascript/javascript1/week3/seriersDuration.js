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
  const lifeSpan = 80 * 365 * 24 * 60; // minutes
  let total = 0;
  for (let i = 0; i < seriesDurations.length; i++) {
    const seriesDuration =
      seriesDurations[i].days * 24 * 60 + seriesDurations[i].hours * 60;

    const percent = (seriesDuration / lifeSpan) * 100;
    total += percent;

    console.log(
      seriesDurations[i].title + " " + percent.toFixed(3) + "% of my life"
    );
  }
  console.log("In total that is " + total.toFixed(3) + " % of my life ");
}

logOutSeriesText();
