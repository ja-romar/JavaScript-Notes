/*

Acceder a propiedades de objetos con variables

*/

/* La notacion de corchetes tambien puede se usada para accceder a una propiedad
que esta almacenada como valor de una variable.

Podemos utilizar esto para iterar a traves de las propiedades de un objeto 
o para acceder a una tabla de busqueda

*/

    const players = {
        1: "Ter Stegen",
        9: "Lewandoski",
        21: "De Jong"
    };
    players[1] = "Marc Ander Ter Stegen"; // IMPORTANTE cuando se trata de numeros se utiliza square bracket
    // cambiamos el valor de 1 por el nombre completo

    const playerNumber = 21;
    const myFavPlayer = players[playerNumber];
    const goalKeeperNumber = 1;
    const goalKeeper = players[goalKeeperNumber];


    console.log(myFavPlayer)
    console.log(goalKeeper)

    /* ================================================================================================================*/

    const jerseys = {
        "first color": "Granada", 
        "Secondary color": "Blue",
        "Third color": "Yellow"
    };  
    jerseys["first color"] = "Blaugrana"; //Estamos cambiand el valor de first color en el objeto

    


