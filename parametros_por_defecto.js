/* Tambien podemos agregar valores por defecto a nuestras funciones como en el siguiente ejemplo */

const favColor = (color = "Black") => "My Favorite color is " + color;

console.log(favColor("Yellow")); //arrojara mi color favorito es yellow
console.log(favColor());// arrojara black por que es el valor por defecto


