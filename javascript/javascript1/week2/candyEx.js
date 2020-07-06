let boughtCandyPrices = [];

let amountToSpend = Math.random() * 100;
console.log(amountToSpend);
function addCandy(candyType, weight) {
  if (candyType === "Sweet") {
    boughtCandyPrices.push(weight * 0.5);
  } else if (candyType === "Chocolate") {
    boughtCandyPrices.push(weight * 0.7);
  } else if (candyType === "Toffee") {
    boughtCandyPrices.push(weight * 1.1);
  } else if (candyType === "Chewing-gum") {
    boughtCandyPrices.push(weight * 0.03);
  } else {
    return console.log("candy type is not exist");
  }
}
addCandy("Sweet", 50);
addCandy("Chocolate", 5);
addCandy("Toffee", 5);
addCandy("Chewing-gum", 5);

//addCandy("gum" , 5); check if we can add more candy type

console.log(boughtCandyPrices);

function canBuyMoreCandy() {
  let count = 0;
  let totalPrice = 0;

  while (count < boughtCandyPrices.length) {
    totalPrice += boughtCandyPrices[count];
    count++;
    console.log("total price " + totalPrice);
  }

  if (totalPrice > amountToSpend) {
    console.log("Enough candy for you! -totalPrice >  amountToSpend");
  } else {
    console.log("totalPrice <  amountToSpend You can buy more, so please do");
  }
}

canBuyMoreCandy();
