/* Cuando se alcanza una setencia "return" la ejecucion de
la funcion actual se detiene y el control se devuelve a la
ubicacion de la llamada */ 

function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye")
  }
  myFun();

  /* En este ejemplo la cadena byebye nuna se mostrara en consola,
  porque la funcion termina en la sentencia return */

  