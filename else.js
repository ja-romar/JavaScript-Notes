/*
Con con las sentencias Else podemos correr un bloque alternativo de codigo si una sentencia
IF es falsa.
*/

// Ejemplo
/*
Un jugador de la Liga es suspendido un partido despues de acumular 5 tarjetas amarillas
la funcion evalua cuantas tarjetas tiene el jugador y si le corresponde una sancion */

function suspendedOrNo(yellowCards) {     
if (yellowCards > 4) {
        return "Suspendido un partido";
    }   else {
        return "No suspendido";
    }
}
    console.log(suspendedOrNo(3));
    console.log(suspendedOrNo(6));