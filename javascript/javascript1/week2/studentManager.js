// the link of codepen is https://codepen.io/MaherHussain/pen/wvKRbpj

// copy your homework solution here to make the webpage work!
const class07Students = [];
function addStudentToClass(studentName) {
  let result;
  // You write code here
  if (studentName === "Queen") {
    if (class07Students.includes("Queen")) {
      result = "sorry we have one Queen you cant add more";
    } else {
      class07Students.push(studentName);
      result = "welcome Queen Margrethe you have place between us";
    }
  } else if (class07Students.length >= 6) {
    result = "Cannot add more students to class 07";
  } else if (class07Students.includes(studentName)) {
    result = "Student " + studentName + " is already in the class";
  } else if (studentName.trim === "") {
    result = "write syudent name please";
  } else {
    class07Students.push(studentName);
    result = "student is added";
  }

  return console.log(result);
}

function getNumberOfStudents() {
  // You write code here
  return class07Students.length;
}
