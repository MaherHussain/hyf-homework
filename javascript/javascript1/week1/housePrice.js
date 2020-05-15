//housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300

// perters parameters 
var wide = 8 ;
var deep = 10;
var height = 10;
var gardinSize = 100;

const perterVolumeInMeters = wide * deep * height;
const peterHousPrice = perterVolumeInMeters *2.5 * 1000 + gardinSize * 300 ;

const peterPayment = 2500000;
//console.log(peterPayment - peterHousPrice);
if (peterHousPrice < peterPayment){
    console.log("Peter paied too much " + peterPayment - peterHousPrice );
    }
    else{
        console.log("Peter paied too little.");
    
    }


// julia parameters

var wide = 5;
var deep = 11;
var height = 8;
var gardinSize = 70;

const juliaVolumeInMeters = wide*deep*height;
const juliaHousPrice = perterVolumeInMeters *2.5 * 1000 + gardinSize * 300 ;

//console.log("julia " + juliaHousPrice);

const juliaPayment = 1000000;

if (juliaPayment < juliaHousPrice)
{
    console.log("Julia paied  too little");
    }
    else{
        console.log("Julia paied too much.");
    
    }
