function weather(temperature) {
  if (temperature < 5) {
    return "it's winter  and it's very cold,  you have to wear coat and hat and cloves ";
  } else if (5 < temperature && temperature < 15) {
    return "it's  still winter but it's not so much cold, so it's good just jacket to wear  ";
  } else if (15 < temperature && temperature < 25) {
    return "it's  sommer and  it's hot , so  Tshirt is enough ......  ";
  } else {
    return "it's  sommer and it's very hot , so  go to beach and don't wear clothes ......  ";
  }
}
const userwear = weather(30);
console.log(userwear);
