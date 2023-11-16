/*
Con el uso de \S podemos hacer lo contrario que con \s es decir ignorar espacios
*/


let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Cambia esta línea
let result = sample.match(countNonWhiteSpace);