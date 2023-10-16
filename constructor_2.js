// Declaracion class con metodo constructor 
//Declaracion del tipo explicita
class WhereWePlay {
    constructor(stadium) {
        this.stadium = stadium;
    }
    whatStadium() {
        console.log("We play on " + this.stadium);
    }
}

const firstMatch = new WhereWePlay ('La cartuja'); //con new invocamos el metodo constructor
firstMatch.whatStadium();

//Declaracion del tipo implicita
class LocalOrVisitor {
    chose() {
        console.log("We play as visitors");
    }
}

const matchStatus = new LocalOrVisitor();
matchStatus.chose();