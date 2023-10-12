/* La sintaxis de destructuracion nos permite asignar valores directamnte desde
un objeto*/

/* Con ES5 se hacia asi*/

const player = { name: "Robert Lewandowski", age: 34 };

const playerName = player.name;
const age = player.age;

console.log("El nombre del jugador es " + playerName + " Y tiene " + age);

/* Con ES6 seria asi*/

const scorer = { hisName: "Robert Lewandowski", hisAge: 34};

const {hisName,hisAge} = scorer;

console.log("El nombre del jugador es " + hisName + " Y tiene " + hisAge);

/* Si se imprimen las dos consolas, mostraran el mismo resultado */
/* Notese que los nombres de las propiedades y variables fueron cambiados para evitar confusiones
pero el codigo sigue funcionando igual */

/* =========================================================================================*/

/* Con desestructuracion podemos asignar variables de objetos extrayendo valores. */

const distance = {
    yesterday: 3,
    today: 4,
    tomorrow: 5
};

const {today: distanceOfToday, tomorrow: distanceOfTomorrow, yesterday: distanceOfYesterday} = distance;


console.log("==========================================================================*"); //unicamente para dividir las consolas de arriba de la siguientes
console.log(distanceOfToday);
console.log(distanceOfTomorrow);
console.log(distanceOfYesterday);


