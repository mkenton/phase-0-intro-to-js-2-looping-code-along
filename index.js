
const names = ["Jeremy", "Joy", "Johnathan"];
const eventName = "housewarming"

function writeCards(names, eventName) {
   let messages; 
   messages = [];

    for (let i = 0; i < names.length; i++) {
        messages[i] = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        debugger;
    }
    return messages;
}

let x = writeCards(names,eventName);
console.log(x)

function countDown(n) {
    while (n >= 0) {
    console.log(n);
    n-- ;}
}