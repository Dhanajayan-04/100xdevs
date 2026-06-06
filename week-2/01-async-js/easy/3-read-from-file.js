const fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {
    console.log(data);
});

let sum = 0;

for(let i=0; i<100000000; i++){
    sum+=i;
}

console.log("Expensive Operation Finished");