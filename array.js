/*

Con las variables de array podemos almacenar varios datos
en un solo lugar.

Se podria decir que es un objeto similar a una lista
para operaciones de recorrido o mutacion, su longitud y contenido
son variables.

*/

const primerArray = ["Hola", 20]; //ejemplo de un Array con dos tipos de datos

//Para declararlo debemos usar corchetes y una coma despues de cada entrada.

/* Tambien existen los arreglos muldimensionales que es un arreglo dentro 
de otro arreglo */

const soccer = [["FCB",24],["Liverpool",5]];

/*===============================================================================*/
/*
Tambien podemos acceder a los datos dentro de un arreglo usando"indices" que
se escriben igual que la notacion de corchetes, con la diferencia de que
en vez de especificar la posicion de un caracter estamos especificando 
la posicion de la entrada de un arreglo como tal
*/

const fcb = [1992,2006,2009,2011,2015];

const fcblastUcl = fcb[4];

console.log("La ultima champions del Barca fue en " + fcblastUcl)

/* En este ejemplo le estamos diciendo que la const lastUcl equivale a la posicion 4
del array fcb, que seria 2015 */

//NOTA: JS empieza a contar desde cero por eso 1992 [0] 2006 [1] 2009 [2] 2011 [3] y 2015 [4]

//Otro ejemplo

const liverpool = [1977,1978,1981,1984,2005,2019];

const liverpoolLastUfc = liverpool[5];

console.log(liverpoolLastUfc)

/* Si por alguna razon yo quisiera modificar los datos de un array es posible 
a diferencia de las cadenas, las entradas de los arreglos si son mutables y pueden
cambiarse, aunque el arreglo fuese declarado con "const"
*/

const unArreglo = [10,25,30,40,50];
unArreglo[1] =  20; // Aqui estamos cambiando el valor de 25 por 20

console.log(unArreglo)

/* ============================================================================================*/

/* 
Para acceder a arreglos multidimensionales es de la siguiente forma
*/

const topGoalsScorers = [
    ["Cruyff", "Kubala", "Henry"],
    ["Suarez", "Neymar", "Messi"],
    ["Lewandoski", "Torres", "Pedri"],
];

const mostGoals = topGoalsScorers[1][2];

console.log(mostGoals) // Esta consola mostrara la opcion "Messi"

//Otro Ejemplo

const livTopGoalScorers = [
    ["Rush", "Hunt", "Owen"],
    ["Suarez", "Torres", "Kuyt"],
    ["Mane", "Salah", "Firminho"],
];

const livMostgoals = livTopGoalScorers[0][1];

console.log(livMostgoals)

