/* Como su nombre lo indica una promesa en JavaScript se utiliza para
prometer que haremos algo. Promise es una funcion constructora, que utiliza
la palabra clave new
Recibe una funcion con sus argumentos. Con dos parametros, resolve y reject estos metodos
son utilizados para determinar el resultado de la promesa. Su sintaxis se ve asi:
*/

const aPromise = new Promise ((resolve, reject) => {
});

/*===========================================================*/

/* Una promesa tiene tres estados, pending, fulfilled y rejected.
La promesa de arriba esa en pending (no hemos anadido una forma de completarla)
Los parametros resolve y reject enviados a promise como argumentos son utilizados
para; resolve cuando queremos que la promesa tenga exito y reject cuando
queremos que falle */

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer representa una respuesta de un servidor
    let responseFromServer;
  
    if(responseFromServer) {
      resolve("We got the data"); //mostrara esta cadena si se cumple
    } else {  
      reject("Data not received"); //mostrara esta cadena si no se cumple
    }
  });

