/*
El ejercicio consiste en hacer una lista de jugadores con su numero del 
partido pasado del barca, posteriormente se deberan anadir los jugadores 
que entraron de cambio
*/

const lastMatchLineUp = [["Ter Stegen ", 1, " "], ["Sergi Roberto ", 20, " "],
["Kounde ", 23, " "], ["Christenseen ", 15, ""], ["Balde ", 3, " "], ["Gundogan", 22, " "]
["Romeu", 18, " "], ["De Jong "], ["Gavi ", 6, " "],["Yamal ", 27, " "], ["Lewandosky ", 9, " "]];

console.log("Estos fueron los 11 iniciales " + lastMatchLineUp)

//Los siguientes son los jugadores que entraron de cambio

const fromBench = [["Torres " , 7, " "], ["Cancelo" ,2, " "], ["Felix" , 14, " "], ["Raphinha ", 11, " "], ["Martinez ", 5, ""]];

lastMatchLineUp.push (fromBench);

const allPlayersThatPlay = lastMatchLineUp;

console.log( "estos fueron todos los jugadores que jugaron " + allPlayersThatPlay)

