const fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err);
        return;
    }

    const cleanedData = data.split(/\s+/).join(' ');

    fs.writeFile('sample.txt', cleanedData, (err) => {
        if(err){
            console.log(err);
            return;
        }

        console.log("File Cleaned Sucessfully");
    });
});