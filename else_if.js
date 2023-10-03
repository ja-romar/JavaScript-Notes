/*
Tambien podemos utilizar cadenas else if para ir comprobando ciertos resultados
*/

//Ejemplo: CLasificacion de edad
// De 0 a 2 bebe
// de 2 a 12 Nino
// De 12 a 15 Puberto
// De 13 a 18 Adolecente
// 18 en adelante Adulto

        function checkAge(age){
           if (age < 2){
            return "Baby";
           } else if (age < 12){
            return "Kid";
           } else if (age < 15){
            return "Puberty";
           } else if (age < 18){
            return "Adolecent";
           } else if (age > 18){
            return "Adult";
           }
        }
        console.log(checkAge(1)); //baby
        console.log(checkAge(8)); //KId
        console.log(checkAge(13)); //Puberty
        console.log(checkAge(17)); //Adolecent
        console.log(checkAge(19)); //Adult
        