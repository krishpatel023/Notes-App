const chalk = require("chalk");
const notes = require('./notes.js');
const cmd1 = process.argv[2];
const cmd2 = process.argv[3];
const cmd3 = process.argv[4];

if(cmd1 === 'new'){
    
    if(cmd2.startsWith('title') && cmd3.startsWith('body')){
        if(notes.findTitle(cmd2.split('=')[1]) === 0)
        {console.log(chalk.black.bgGreen('NEW NOTE CREATED!'));
        notes.newNote(cmd2.split('=')[1], cmd3.split('=')[1]);
        }
        else{
            console.log(chalk.black.bgRed('Note Already Exists !!!'))
        }
    }
} else if(cmd1 === 'delete'){
    if(cmd2.startsWith('title')){
        if(notes.findTitle(cmd2.split('=')[1]) === 1){
        notes.deleteNote(cmd2.split('=')[1]);
        console.log(chalk.black.bgWhite('Note Deleted'));
        }
        else{
            console.log(chalk.black.bgRed('No Note Found To  Be Deleted'));
        }
    }
} else if(cmd1 === 'list'){
    console.log(chalk.black.bgBlue('Your NOTES:'));
    notes.allNotes();
} else if(cmd1 === 'read'){
    console.log(chalk.black.bgYellow(cmd2.split('=')[1]));
    if(cmd2.startsWith('title')){
        notes.findNote(cmd2.split('=')[1]);
    }
}