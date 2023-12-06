//Supongamos que queremos conocer el numero de jersey de un grupo de jugadores
//Del Futbol Club Barcelona

let players = {
    Lewandowski: 9,
    Raphinha: 11,
    Felix: 14
};

function checkJerseyNumber(player) {
    let printjersey = [];
    printjersey = players[player];
    return printjersey;

};

console.log(checkJerseyNumber("Lewandowski"));