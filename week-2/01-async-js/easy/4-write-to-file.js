const fs = require('fs');

fs.writeFile('output.txt', 'Hello Dhanajayan', (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('File Written Sucessfully');
});

console.log('Writing file');