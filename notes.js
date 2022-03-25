const fs = require('fs')

const newNote = function(title, body) {
    const notes = uploadNotes();
    notes.push({ title, body });
    fs.writeFileSync('notepad.json', JSON.stringify(notes))

}

const deleteNote = function (title) {
    const notes = uploadNotes()
    const remaining = notes.filter(function (note) {
        return note.title !== title
    })
    fs.writeFileSync('notepad.json', JSON.stringify(remaining))    
}

const allNotes = () => {
    const notes = uploadNotes()
    notes.forEach(note => console.log(note.title))
}

const findNote = title => {
    const notes = uploadNotes()
    const note = notes.find(note => note.title === title)
    debugger;
    if (note) {
        console.log(note.body)
    } else {
        console.log('Note not found')
    }
}

const findTitle = title => {
    const notes = uploadNotes()
    const note = notes.find(note => note.title === title)
    debugger;
    if (note) {
        return 1;
    }
    else{
        return 0;
    }
}

const uploadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notepad.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}


module.exports = { newNote, deleteNote, allNotes, findNote, findTitle}