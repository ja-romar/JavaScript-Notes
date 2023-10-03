/* 

Tambien contamos con un operador para probar si un numero es mayor o igual que un determinado numero

*/

function equalOrGreater (x) {
    if (x >= 10) {
        return "10 o mas";
    }
    if (x >= 5) {
        return "5 o mas";
    }
        return "menor que 5";
}

console.log(equalOrGreater(8));
console.log(equalOrGreater(20));
console.log(equalOrGreater(4));

