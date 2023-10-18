/* Con getters y setters podemos obtener el valor de un objeto
y establecer el valor de alguna propiedad dentro de un objeto*/

// El clasico ejemplo de convertir temperatura celsius a fahrenheit

class Thermostat {
    constructor (fahrenheit) {
        this._fahrenheit = fahrenheit; // Se suele utilizar el (_) para variables privadas
    }
    get temperature (){
        return (5 / 9) * (this._fahrenheit - 32);
    }
    set temperature(celsius){
        return this._fahrenheit = (celsius * 9.0) / 5 +32;
    }
}

class Song {
    constructor(artist) {
      this._artist = artist;    
    }
    get composer() {
        return this._artist;
    }
    set composer(updateArtist) {
        this._artist = updateArtist;
    }
}

const cancion = new Song ('Megadeth');
console.log(cancion.composer);
cancion.composer = 'Metallica'; // Aqui estariamos actualizando el artista
console.log(cancion.composer)