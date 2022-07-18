const { log } = require('console');
const fs = require('fs');
const chalk = require('chalk');


const addNote = (title, body) => {
    const notes = loadNotes();
    //  console.log(notes);

    // const duplicateNotes = notes.filter((note) =>
    //     note.title === title
    // );
    // debugger;
    const duplicateNote = notes.find((note) => note.title === title);
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        });
        console.log(chalk.inverse.green("new note added"));
    }
    else {
        console.log(chalk.inverse.red("title already exists"));
    };
    saveNotes(notes);
};

const saveNotes = (notes) => {
    const dataString = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataString);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataString = dataBuffer.toString();
        return JSON.parse(dataString);
    } catch (err) {
        return [];
    };

}

const removeNotes = (title) => {
    let notes = loadNotes();
    let newNotes = notes.filter((note) => 
       note.title !== title
    );
    if (newNotes.length > newNotes.length) {
        console.log(chalk.inverse.green("note removed"));
        saveNotes(newNotes);
    }
    else {
        console.log(chalk.inverse.red("note not found"));
    }
    //  let data = JSON.stringify(newNotes);
    //  fs.writeFileSync("notes.json",data);

}

const listNotes = () =>{
    let notes = loadNotes();
    notes.forEach((note)=> console.log(note.title));
    
}

const readNote = (  title ) => {
      let notes = loadNotes();
      let note = notes.find((note) => note.title === title);
      if (note) {
        console.log(chalk.inverse.green(note.title));
        console.log(chalk.blue(note.body));
      }
      else{
        console.log(chalk.inverse.red("title not found"));
      };
}
module.exports = {

    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote,
}