/*

Ejercicios else if
Funcion que tome dos argumentos que seran los goles de los dos equipos enfrentados en base a eso determinara
si ganamos, perdimos, empatamos, perdimos por goleada o ganamos por goleada.
*/

const typeOfResult = ["We won ", "We lost ", "We draw ", "We crush the rival ", "They crush us "];

function result (ourGoals, theirGoals) {
   if (ourGoals > theirGoals +3){
    return typeOfResult[3];
   }else if (ourGoals + 3 < theirGoals){
    return typeOfResult[4];
   } else if(ourGoals > theirGoals){
    return typeOfResult[0];
   } else if (ourGoals < theirGoals){
    return typeOfResult[1];
   } else if (ourGoals == theirGoals){
    return typeOfResult[2];
   }
}
    //Pruebas
    console.log(result(2,0)); //Ganamos
    console.log(result(0,2)); //Perdimos
    console.log(result(5,5)); //Empatamos
    console.log(result(6,2)); //Goleamos
    console.log(result(2,8)); //Nos golearon




    