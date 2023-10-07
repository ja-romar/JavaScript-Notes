/* Utilizando math.random podemos generar numeros decimales aleatorios
entre 0 y 1, puede devolver un 0 pero nunca devolvera un 1 */

function example(){
    return Math.random();
}

/* Utilizando math.floor podemos obtener un numero aleatorio entero */


function otherExample (){
    return Math.floor(Math.random() * 10); 
}

/* Funcion que genera numero aleatorio con un rango de numeros */

function aRandomRange (min,max){ /* Aqui pasaremos los dos argumentos de la funcion (minimo y maximo) */

    return Math.floor(Math.random()* (max - min + 1)) + min  /* genera un numero decimal entre 0 (inclusivo) y 1 (exclusivo) 
    despues restara el maximo conta el minimo y le sumara 1, el resultado de dicha operacion sera multiplicado con el numero anterior
    y se le sumara el minimo para devolve el numero aleatorio final */
}

    var myNumber = aRandomRange(1,33)
    var otherNumber = aRandomRange(60,65)

    console.log(myNumber)   
    console.log(otherNumber)