const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    //this is reading from the file
    read() {
        return readFileAsync('./db/db.json', 'utf8');
    }

    //we are making sure we are stringifying the object we are writing
    write(note) {
        return writeFileAsync('./db/db.json', JSON.stringify(note));
    }

    getNotes() {
        //return the notes
        return this.read().then((notes) => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                console.log(err)
                parseNotes = []
            }
            return parsedNotes;
        })
    }

    //make is a single then more notes
    addNote(note) {
        return this.getNotes()
        .then((parsedNotes) => {
            parsedNotes.push(note);
            console.log(parsedNotes)
            return this.write(parsedNotes);
        })
        .then(() => {
            console.log('Note added successfully!');
        })
        .catch(error => {
            console.error('Error adding note:', error);
        });


    }


removeNote(id)  {

}

}


module.exports = new Store();