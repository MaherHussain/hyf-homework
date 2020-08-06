// @ts-nocheck

const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");
const span = document.querySelector("span");

const boxes = document.querySelectorAll("ul.marks li");

// remove random start postions from boxes
 for (let box of boxes) {
    box.style.left = 0;
    box.style.top = 0;
  }
// movement one by one function 
const translateOneByOne = () => {
 
  const redboxMovment = moveElement(redBox, { x: 20, y: 300 });
  const blueboxMovment = redboxMovment.then((move) =>
    moveElement(blueBox, { x: 400, y: 300 })
  );
  const greenboxMovment = blueboxMovment
    .then((move) => moveElement(greenBox, { x: 400, y: 20 }))
    

  
};
//translateOneByOne();


// movement all at once function 
const translateAllAtOnce = () => {
    moveElement(redBox, { x: 20, y: 300 });
     moveElement(blueBox, { x: 400, y: 300 });
     moveElement(greenBox, { x: 400, y: 20 });

 
};
translateAllAtOnce();