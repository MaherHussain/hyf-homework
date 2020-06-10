const spiritAnimals = [
  {
    name: "Bat",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/Bat_Spirit-Animal-1-150x150.jpg",
  },
  {
    name: "Bear",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/bear-totem-300-150x150.jpg",
  },
  {
    name: "Butterfly",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/butterfly-totem-300-150x150.jpg",
  },
  {
    name: "Cat",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/cat-totem-300-150x150.jpg",
  },
  {
    name: "Cougar",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/Cougar-Spirit-Animal-1-150x150.jpg",
  },
  {
    name: "Coyote",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/coyote-totem-300-150x150.jpg",
  },
  {
    name: "Crow",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/crow-totem-300-150x150.jpg",
  },
  {
    name: "Deer",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/deer-totem-300-150x150.jpg",
  },
  {
    name: "Dog",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/Dog-Spirit-Animal-2-150x150.jpg",
  },
  {
    name: "Dolphin",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/dolphin-totem-300-150x150.jpg",
  },
  {
    name: "Dragon",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/Dragon-Spirit-Animal-1-150x150.jpg",
  },
  {
    name: "Dragonfly",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/odonata-libellule-150x150.jpg",
  },
  {
    name: "Eagle",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/Eagle-Spirit-Animal-1-150x150.jpg",
  },
  {
    name: "Fox",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/fox-totem-300-150x150.jpg",
  },
  {
    name: "Frog",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/Bigstock-35457034-Close-up-On-A-Red-eyed-Tree-Frog-Agalychnis-Callidryas-150x150.jpg",
  },
  {
    name: "Hawk",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/hawk-totem-300-150x150.jpg",
  },
  {
    name: "Horse",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/horse-totem-300-150x150.jpg",
  },
  {
    name: "Hummingbird",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/hummingbird-totem-300-150x150.jpg",
  },
  {
    name: "Jaguar",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/Jaguar-Spirit-Animal-1-150x150.jpg",
  },
  {
    name: "Ladybug",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/Ladybug-Animal-Totem-1-150x150.jpg",
  },
  {
    name: "Lion",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/lion-totem-300-150x150.jpg",
  },
  {
    name: "Owl",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/owl-totem-300-150x150.jpg",
  },
  {
    name: "Panda",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/panda-totem-300-150x150.jpg",
  },
  {
    name: "Panther",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/panther-spirit-animal-meaning-150x150.jpg",
  },
  {
    name: "Peacock",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/Peacock-Spirit-Animal-1-150x150.jpg",
  },
  {
    name: "Rabbit",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/Rabbit-Spirit-Animal-1-150x150.jpg",
  },
  {
    name: "Raccoon",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/Raccoon-Spirit-Animal-1-150x150.jpg",
  },
  {
    name: "Raven",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/Raven-Spirit-Animal-1-150x150.jpg",
  },
  {
    name: "Sheep",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/sheep-totem-300-150x150.jpg",
  },
  {
    name: "Snake",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/snake-totem-300-150x150.jpg",
  },
  {
    name: "Spider",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/Spider-Totem-300x225-150x150.jpg",
  },
  {
    name: "Swan",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/Swan-Spirit-Animal-1-150x150.jpg",
  },
  {
    name: "Tiger",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/tiger-totem-300-150x150.jpg",
  },
  {
    name: "Turkey",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/turkey-totem-300-150x150.jpg",
  },
  {
    name: "Turtle",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/turtle-totem-300-150x150.jpg",
  },
  {
    name: "Whale",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/whale-spirit-animal-150x150.jpg",
  },
  {
    name: "Wolf",
    imgUrl:
      "https://www.spiritanimal.info/wp-content/uploads/wolf-totem-300-150x150.jpg",
  },
];
let select = document.querySelector("select");
let op = document.getElementsByClassName("op");
let text = document.querySelector("input");
let demo = document.getElementById("demo");
let aniImg = document.querySelector("img");
let btn = document.getElementById("btn");
function createRandomAnimal() {
  if (text.value == "") {
    demo.innerHTML = "you should write your name in input field";
    aniImg.src = "";
  } else {
    let randomAni =
      spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
    demo.innerHTML =
      "Your name is " +
      '"' +
      text.value +
      '"' +
      " your spirit animal is  " +
      '"' +
      randomAni.name +
      '"';
    aniImg.src = randomAni.imgUrl;
  }
}

 
select.addEventListener("change", function () {
  if (select.options[select.selectedIndex].text === "Hover") {
    btn.removeEventListener("click", createRandomAnimal);
    console.log(select.options[select.selectedIndex].text);
    text.addEventListener("mouseover", createRandomAnimal);
  } else if (select.options[select.selectedIndex].text === "Click") {
           text.removeEventListener("mouseover", createRandomAnimal);

           console.log(select.options[select.selectedIndex].text);
           btn.addEventListener("click", createRandomAnimal);
         } else {
           demo.innerHTML = "you have to choose a method to get your animal";
         }
});


