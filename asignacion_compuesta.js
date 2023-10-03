/*
En programacion es comun usar, asignaciones para modificar
el contenido de una variable.
Es importante recordar que todo lo que esta a la derecha
del signo de igualdad se evalua primero antes
de asignarse
*/

var myData = 40; // Declaramos variable

myData = myData + 20; // Aqui sumamos 20 a la variable

myData += 20; // con el operador "+=" podemos hacer lo mismo que arriba/


console.log("suma " + myData)

/* ===================================================*/

/*
Haremos lo mismo pero con una resta 
*/

myData -= 40;
console.log(myData + " resta")

/* ===================================================*/

/*
Tambien se puede utilizar para multiplicar en este caso con el operador (*=) 
*/

myData *= 2;
console.log(myData + " multiplicacion")

/* ===================================================*/
/*
Tambien podemos hacer divisiones con (/=)
*/

myData /= 2;
console.log(myData + " Division")