

// Array multidimensional con la plantilla del Fc Barcelona del 2009

// Plantel del FC Barcelona en la temporada 2008-2009
var plantelBarcelona = [
    ["Víctor Valdés", "Albert Jorquera", "José Manuel Pinto"],
    ["Carles Puyol", "Gerard Piqué", "Rafael Márquez", "Sylvinho", "Gabriel Milito", "Martín Cáceres", "Maxwell"],
    ["Yaya Touré", "Seydou Keita", "Xavi Hernández", "Andrés Iniesta", "Sergio Busquets", "Thiago Motta"],
    ["Lionel Messi", "Samuel Eto'o", "Thierry Henry", "Bojan Krkić", "Eiður Guðjohnsen", "Alexander Hleb", "Pedro Rodríguez"],
];

// Función para imprimir el plantel
function imprimirPlantel() {
    for (var i = 0; i < plantelBarcelona.length; i++) {
        console.log(`Posición ${i + 1}: ${plantelBarcelona[i].join(', ')}`);
    }
}

// Imprimir el plantel
console.log("Plantel del FC Barcelona en la temporada 2008-2009:");
imprimirPlantel();

//De la siguiente forma imprimiriamos "Lionel Messi".

console.log("El mejor jugador de la historia es: " + plantelBarcelona[3][0]);