//Metodo slice 

let anArray = ["Soccer", "Football", "Basketball", "Box", "MMA"]; //Arreglo principal

let newArray = anArray.splice(0,1); //Extraemos el elemento "Soccer" del array.
let otherArray = anArray.splice(2,4);//Extrae "Box" y "MMA"


console.log("My fav sport is " + newArray);
console.log("But this others also like me " + otherArray);




