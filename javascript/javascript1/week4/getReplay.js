let toDo = [];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function getReply(command) {
  switch (command) {
    case "Hello my name is Maher":
      return "Nice to meet you Maher";

    case "What is my name?":
      return "Your name is Maher";

    case "Add fishing to my todo":
      toDo.push("fishing");
      return "fishing added to your todo";

    case "Add singing in the shower to my todo":
      toDo.push("singing in the shower");
      return "singing added to your todo";

    case "Remove fishing from my todo":
      const index = toDo.indexOf("fishing");
      if (index > -1) {
        toDo.splice(index, 1);
      }
      return "Removed fishing from your todo";

    case "What is on my todo?":
      return "you have " + toDo.length + " todos " + '"' + toDo + '"';

    case "What day is it today?":
      return (
        new Date().getDate() +
        " of " +
        monthNames[new Date().getMonth()] +
        " " +
        new Date().getFullYear()
      );

    case "what is 3 + 3":
      return 3 + 3;

    case "set a timer for 4 minutes":
      let timer = setTimeout(function () {
        console.log("timer is done");
      }, 4000);
      return "timer set for 4 min";

    default:
      return "this command is  undefined in voice assistant, please try again";
  }
}
/* console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));

console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 3"));

console.log(getReply("set a timer for 4 minute ")); */
console.log(getReply("hello  "));
