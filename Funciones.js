/* FUnciones re utilizables en JavaScript */

/* En JavaScript podemos dividir nuestro codigo,
en partes que podemos re utilizar, a estas se les 
conoce como funciones */

/*================================================*/

function reusableFunction() {
    console.log("Hi World");
}

/*Arriba estamos creando la funcion cuyo nombre es
"reusableFunction", a continuacion llamaremos a la funcion*/

reusableFunction();

/*Esta es la forma de llamar a la funcion */

/*================================================*/

/* Dar valores a las funciones utilizando argumentos */
/* Los parametros son variables que actuan como marcadores,
de posicion para los valores que deben ser introducidos en
una funcion cuando es llamada.

Cuando se define una funcion se define junto con uno o mas
parametros.

Los valoes que se introducen a una funcion cuando se llama
a dicha funcion se llaman argumentos */

function functionWithArgs(a, b){
    console.log (a - b);
}
functionWithArgs(4,3);
functionWithArgs(10,7);

/* Primero se indica que la funcion tendra dos valores, 
despues que a el primer valor (a) se le restar (b).
Posteriormente se le de los argumenos 4,3 y al final 10,7. */

/*================================================*/

/* Devuelve un valor de una funcion utilizanto "Return"
Podemos pasar valores a una funcion con argumentos, puedes
utilizar una declaracion de devolucion (return) para enviar 
un valor fuera de una funcion */

function timesFive(num) {
    return num *  5;
    }
    console.log(timesFive(5));

    //La consola devolveria 25 

    function timesFive(num) {
        return num *  5;
        }
        console.log(timesFive(2));
    //La consola devolveria 10

/*================================================*/

/* En JavaScript el ambito es la visibilidad de las variables.
Las variables definidas fuera de un bloque de funcion tienen
un ambito global, significa que pueden ser observadas desde
cualquier lugar del codigo JavaScript

Si no se utilizan let o const las variables automaticamente
se crean en el ambito global 

SIEMPRE SE DEBEN DE CREAR LAS VARIABLE CON let O const

/*================================================*/

/* Las variables que se declaran dentro de una funcion, asi
como los parametros de la funcion tienen un ambito local.
Esto significa que son visibles dentro de esa funcion.
*/

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);

/* La llamada a la función myTest() mostrará la cadena foo en 
la consola. La línea console.log(loc) (fuera de la función myTest) lanzará un error, 
ya que loc no está definido fuera de la función. */

/*================================================*/

/* Ambito local vs ambito global en funciones */ 

/*
Podemos tener variables locales y variables globales con el
mismo nombre. Cuando haces, esto la variable local tiene 
precedencia sobre la variable global. */

const outerWear = "T-Shirt";

function myOutfit() {
    const outerWear = "sweater";
    return outerWear;
}
/* En este caso regresaria sweater */

/*================================================*/

/* Asignacion con un valor devuelto */

/* Todo lo que esta a la derecha del signo de igualdad se 
resuelve antes de asignar el valor. Esto significa que podemos
tomar el valor devuelto en una funciony asignarle una 
variable. */

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

/* Processed tendria un valor de 2 */
