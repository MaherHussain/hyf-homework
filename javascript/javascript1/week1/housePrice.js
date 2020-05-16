//housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300

// perters parameters
let wide = 8;
let deep = 10;
let height = 10;
let gardinSize = 100;

const perterVolumeInMeters = wide * deep * height;
const peterHousPrice = perterVolumeInMeters * 2.5 * 1000 + gardinSize * 300;

const peterPayment = 2500000;
//console.log(peterPayment - peterHousPrice);
if (peterHousPrice < peterPayment) {
  console.log("Peter paied too much ");
} else {
  console.log("Peter paied too little.");
}

// julia parameters

wide = 5;
deep = 11;
height = 8;
gardinSize = 70;

const juliaVolumeInMeters = wide * deep * height;
const juliaHousPrice = perterVolumeInMeters * 2.5 * 1000 + gardinSize * 300;

//console.log("julia " + juliaHousPrice);

const juliaPayment = 1000000;

if (juliaPayment < juliaHousPrice) {
  console.log("Julia paied  too little");
} else {
  console.log("Julia paied too much.");
}
