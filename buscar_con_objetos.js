/* Tambien resulta conveniente (si tenemos datos tabulares) utilizar un objeto
para realizar un busqueda de valores en lugar de switch o if-else.
Esto es util cuando de antemano sabemos que los datos de entrada estan
en un rango

*/

    function policeCode (code){
        let meaning = "";

        const codes = {
           1: "Oficial en el suelo",
           "10-0": "Persecucion",
           "10-1": "Oficial necesita ayuda",
           "10-2": "Transmita mensaje",
           "10-3": "Detenga transmision",
           "10-4": "Afirmativo",
           "10-5": "Negativo",
           "10-6": "Ocupados",
           "10-7": "Disponible",
           "10-8": "Ir a comisaria",
           "10-9": "Repetir ultimo mensaje",
           "10-10": "salir de servicio"
        };
        meaning = codes[code];

        return meaning;

    }

    console.log(policeCode("10-0"));

    function checkObj(obj, checkProp) {
        // Cambia solo el código debajo de esta línea
        if (obj.hasOwnProperty(checkProp)){
          return obj[checkProp];
        } else {
          return "Not Found";
        }
        // Cambia solo el código encima de esta línea
      }

      console.log(checkObj({city: "Seattle"}, "district"))
      console.log(checkObj({city: "Juarez"}, "city"))


