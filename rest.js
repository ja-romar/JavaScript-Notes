/*Parametro rest */

/* Con el parametro rest puedes crear funciones que tomen un
numero variable de argumentos, todos estos argumentos son almacenados
en un arreglo */

// Ejemplo de uso de rest

const sum = (...args) => { //sintaxis test (...args)
    let total = 0;
    for (let i = 0; i < args.length; i++){ //bucle for
        /*i inicializada en 0, mientras i sea menor a el largo de args suma un valor a i
        para poder seguir iterando y tambien poder detenerse*/
        total += args[i]; 
}
    return total;
}
console.log(sum(2,3,4));