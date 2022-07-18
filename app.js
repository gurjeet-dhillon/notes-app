const fs = require('fs');
const validator = require('validator');
const add = require('./util.js');
const notes = require('./notes.js');
const { log } = require('console');
const chalk = require('chalk');
const yargs = require('yargs');

yargs.version('1.1.0');


// creating add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
     title : {
        describe: 'note title',
        demandOption : true,
        type : 'string',
     },
     body :{
        descrption : 'note description',
        demandOption : true,
        type : 'string',
     }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body);
        // console.log("Title: " + argv.title);
        // console.log("Body : " + argv.body);
    }
});

//creating remove command 
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder : {
        title : {
            descrption : 'Title of note you want to remove',
            demandOption : true,
            type : 'string',
        }
    },
    handler: function(argv){
        notes.removeNotes(argv.title);
        // console.log(argv.title);
    }
});

// creating list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function(){
        console.log(chalk.red("your notes list"));
        notes.listNotes();
    }
});

// creating read a new note command

yargs.command({
    command: 'read',
    describe: 'reading a note',
    builder : {
        title : {
            describe : 'Title of note you want to read',
            demandOption : true,
            type : 'string',
        }
    },
    handler : function(argv){
        notes.readNote(argv.title);
    }
});

yargs.parse();








// console.log(yargs.argv);


// console.log(process.argv);



// const greenMsg = chalk.green.bold.inverse("success");
// console.log(greenMsg);


// console.log(validator.isURL("gurjeetdhillon33@gmail.com"));

// let msg = getNotes()
// console.log(msg);

// let sum = add(2,5);
// console.log(sum);

// fs.writeFileSync('notes.txt',"this is created by gurjeet singh dhillon");
// fs.appendFileSync('notes.txt', "\n i used appendFileSync");