/* 
Supongamos que queramos eliminar los espacios en blanco de una string
para esto usaremos el metodo trim(), de la siguiente forma
*/



    function noSpace(test){ //Creamos la funcion que con trim eliminaremos los espacios al principio y al final.
     test =  test.trim(); // trim() elimina los espacios
     return test; 
    }

    const withSpace = " This is a string with space ";
    const withOutSpace = noSpace(withSpace);

    console.log(withOutSpace)