const notes = []; // collection of objects
function saveNote(content, id) {
  notes.push({ content, id }); // we pushed the object into arr
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

// here go getNot function

/**
 * @param {number} id
 */
function getNote(id) {
  if (typeof id !== "number") {
    console.error("the input is not a number ");
    return;
  }

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }

  throw new Error("note not found!");
  //console.error(" note not found !");
}

const firstNote = getNote(3);
console.log(firstNote);

// here go all notes formatted function
function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      "The note with id: " +
        notes[i].id +
        ", has the following note text: " +
        '"' +
        notes[i].content +
        '"'
    );
  }
}
logOutNotesFormatted();
