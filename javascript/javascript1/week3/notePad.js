const notes = []; // collection of objects
function saveNote(content, id) {
  let elem = {}; // first we made an object var
  elem.id = id;
  elem.note = content;
  notes.push(elem); // we pushed the object into arr

  // write some code here
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);
