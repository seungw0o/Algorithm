const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    answer = ""
    n = Number(input[1]);
    for(let i = 0; i < n; i++){
        answer+=str;
    }
    console.log(answer);
});