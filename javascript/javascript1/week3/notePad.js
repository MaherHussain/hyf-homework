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

// here go getNot function

function getNote(id) {
  for (i = 0; i < notes.length; i++) {
    if (id === notes[i].id) {
      return notes[i];
    }
  }
  if (isNaN(id)) {
    console.log("the input is not a number ");
  } else {
    console.log("there's no note with this id ");
  }

  // your code here
}

const firstNote = getNote(3);
console.log(firstNote);

// here go all notes formatted function
function logOutNotesFormatted() {
  for (i = 0; i < notes.length; i++) {
    console.log(
      "The note with id: " +
        notes[i]["id"] +
        ", has the following note text: " +
        '"' +
        notes[i]["note"] +
        '"'
    );
  }
  // your code here
}
logOutNotesFormatted();
