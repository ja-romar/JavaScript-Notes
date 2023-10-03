/* Otra forma de iterar es con los bucles conocidos como for. */

// Son declarados con 3 expresiones opcionales, separadas de la siguiente forma:

const anArray = [];

for (let a = 5; a <= 10; a++){  /*con let inicializamos a con un valor de 5, con la siguiente expresion
le decimos que itere el bucle mientras a se igual o menor a 10, una vez ahi se detiene */
    anArray.push(a)
}

console.log(anArray)

/* ======================================================================================================================*/

const anOtherArray = [];
for (let b = 5; b < 10; b++){ /* con let inicializamos b con un valor de 5 e iteramos hasta llegar a 9 
la diferencia con anArray es que itera mientras b sea menor a 10 por eso en consola se muestra solo hasta el 9*/
    anOtherArray.push(b)
}

console.log(anOtherArray)

/* ========================================================================================================================*/

//Tambien podemos iterar de dos en dos como en el siguiente ejemplo

const impar =[];
for (let c = 4; c < 10; c += 2 ){ /* La consola mostrara 4,6,8 haciendo un conteno de dos en dos */
    impar.push(c);
}

console.log(impar)

/* =========================================================================================================================*/

/* En este ejemplo contamos de 1000 en 1000 */

const anOtherExample =[];
for (let y = 0; y < 10000; y += 1000 ){
    anOtherExample.push(y);
}

console.log(anOtherExample)

/* =========================================================================================================================*/