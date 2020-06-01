let activities = [];
let date = new Date();
function addActivity(date, activity, duration) {
  activities.push({ date, activity, duration });
}
formattedDate =
  date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
addActivity(formattedDate, "Youtube", 30);
addActivity(formattedDate, "facebook", 15);
addActivity(formattedDate, "twetter", 10);
console.log(activities);

function showStatus(activities) {
  let usageAmount = 0;
  for (i = 0; i < activities.length; i++) {
    if (activities.length === 0) {
      console.log("Add some activities before calling showStatus");
      return;
    } else {
      usageAmount += activities[i].duration;
    }
  }
  console.log(
    "You have added " +
      activities.length +
      " activities. They amount to " +
      usageAmount +
      " min. of usage"
  );
  //add time limit feature
  let timeLimit = 90;
  if (usageAmount >= timeLimit) {
    console.log(
      "your limit is " +
        timeLimit +
        " min You have reached your limit, no more smartphoning for you! "
    );
  } else {
    console.log(
      "your didn't reach to your usage limit " + timeLimit + " min enjoy!"
    );
  }
}

showStatus(activities);
function spentMostTime() {
  let spentMost = 0;
  //here loop for chech  the high of duration
  for (let i = 0; i < activities.length; i++) {
    if (spentMost < activities[i].duration) {
      spentMost = activities[i].duration;
    }
  }
  //this loop is check the highst duration and log out it
  for (let m = 0; m < activities.length; m++) {
    if (spentMost == activities[m].duration) {
      console.log(
        "the activity that you has spent the most time on is " +
          activities[m].activity
      );
    }
  }
}
spentMostTime();
