let aText = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Cambia esta línea
let result = aText.match(myRegex);

console.log(result)

let secondText = "<p>Loeremp impsum</p1>"
let regex  = /<.p?>/;

let secondResult = secondText.match(regex);

console.log(secondResult);