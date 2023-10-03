/*
Tambien existe la extricta igualdad (===) que se encarga de comprobar que dos datos sean exactamente iguales
en el caso de igualdad si tenemos 2 y '2' numero y string, podria decir que son iguales, con estrica 
igualdad no
*/

//Ejemplo

function exactlyEqual (a) {
    if (a === 10) {
        return "Equal";
    }
        return "Not Equal";
}

exactlyEqual("10");

console.log(exactlyEqual(10));
console.log(exactlyEqual(11));
console.log(exactlyEqual("10"));

/*=====================================================================================================*/

//Ejemplo

function correctWord (word) {
    if (word === "Barcelona is the best team"){
        return "Sabes de futbol";
    }
        return "No sabes nada de futbol";
}

console.log(correctWord("Madrid is the beast team"));
console.log(correctWord("Barcelona is the best team"));

/* ===================================================================================================*/

function compareEquality (x,y){
    if (x === y) {
        return "son iguales";
    }
        return "son diferentes";
}

console.log(compareEquality(10, 11));