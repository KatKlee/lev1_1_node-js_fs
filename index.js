import fs from 'fs'



// Open file blog1.txt

/* fs.open('./blog1.txt', (err, fd) => {
    if (err) {
        console.log(err)
    } else {
        console.log('opened')
        console.log(fd)
    }
}) */



// Change the text of blog1.txt

/* fs.writeFile('./blog1.txt', 'Welch cooler neuer Text', (err) => {
    if (err) console.log(err)
}) */



// Create a new file named blog2.txt and write some content

/* fs.writeFile('./blog2.txt', 'Das ist ein Eröffnungstext', (err) => {
    if (err) console.log(err)
}) */



// Create a new directory named assets

/* fs.mkdir('./assets', (err) => {
    if (err) console.log(err)
}) */



// Delete the directory 'assets', if the directory already exists

/* fs.access('./assets', fs.constants.F_OK, (err) => {
    if (err) {
        fs.mkdir('./assets', (err) => {
            if (err) console.log(err);
        })
    } else {
        fs.rmdir('./assets', (err) => {
            if (err) console.log(err)
        })
    }
}) */



// Create a file named 'delete.txt'

/* fs.writeFile('./delete.txt', 'Please delete me', (err) => {
    if (err) console.log(err)
}) */



// Delete the file 'delete.txt' if the file already exists

/* fs.access('./delete.txt', fs.constants.F_OK, (err) => {
    if (err) {
        fs.writeFile('./delete.txt', 'Please delete me', (err) => {
            if (err) console.log(err);
        })
    } else {
        fs.unlink('./delete.txt', (err) => {
            if (err) {
                console.log(err)
                console.log('file deleted')
            }
        })
    }
}) */



// Create a file named 'Hello.txt', fill with content and rename the file to 'HelloWorld.txt'

fs.writeFile('./hello.txt', 'Ich füge der Datei Text hinzu', (err) => {
    if (err) { console.log(err) }
    else {
        fs.rename('./hello.txt', './helloworld.txt', (err) => {
            if (err) console.log(err)
        })
    }
})