//codepen link
//https://codepen.io/MaherHussain/pen/bGVQKqm

// Copy your getFullname function here
function getFullname(firstname, lastname, useFormalName = false) {
  if (useFormalName == true) {
    console.log(firstname, lastname);

    return "Lord " + firstname + " " + lastname;
  } else {
    console.log(firstname, lastname);

    return firstname + " " + lastname;
  }
}
