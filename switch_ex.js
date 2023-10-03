/*
Crear una declaracion switch para que devuelva el nombre de un jugador
segun su numero de camiseta
*/

    function namePlayer (n) {
        var answer = "";

        switch (n){
            case 9:
            answer = "Lewan"
            break;
            case 21:
            answer = "De Jong"
            break;
            case 14:
            answer = "Felix"
        }
        return answer;
    }

    console.log(namePlayer(21));

        function namePlayer2 (n2) {
            let hisName = "";

            switch(n2){
                case 8:
                    hisName = "Pedri"
                    break;
                case 3:
                    hisName = "Balde"
                    break;
                    
            }
            return hisName

        }
        console.log(namePlayer2(9));

/*===================================================================================*/
/* Ahora hagamos un switch con el valor default, que sirve para cuando no encontramos ninguna coincidencia de valores */

        function nameOfalbum (a){
            let albumInfo = "";

            switch(a){
                case 1990:
                    albumInfo = "Rust In Peace"
                    break;
                case 1994:
                    albumInfo = "Youthanasia"
                    break;
                case 1999:
                    albumInfo = "Risk"
                    break;
                default:
                    albumInfo = "That year Megadeth don't release an album"
            }
            return albumInfo;
        }

        console.log("El album es " + (nameOfalbum(1994)));
        console.log(nameOfalbum(1997));