const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = input[0];
    for(let i = 1; i <= n; i++){
        let string = ""
        for(let j = 0; j < i; j++){
            string += "*";
        }
        console.log(string)
    }
});



