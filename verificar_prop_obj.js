/* Ejercicio para verificar que las propiedades de un objeto existan */

function verifyProp (obj, checkProp){     // creamos la funcion
    if(obj.hasOwnProperty(checkProp)){  // utilizamos hasOwnProperty para saber si la propiedad existe, en este casp en el segundo argumento llamado, checkprop.
        return obj[checkProp]; //  Si encuentra que la propiedad existe, nos retornara (return) el valor de objeto que encontro checkprop 
    }   else { //sino 
        return "Property doesn't exist"; //nos regresara la siguiente string
    }
}

console.log(verifyProp({team: "Barcelona"}, "team")) // para verificar en consola, probamos con un objeto que contiene la propiedad team con el valor barcelona
console.log(verifyProp({color: "blue"}, "team")) // para probar el else, probamos con un objeto que contiene la propiedad blue. retornara la string "Property doesn't exist"
