/*
continuacion de ejercicios con switch 
*/

// Multiples ociones identicas
// Funcion con switch que regrese para (1,2,3,4,5) reprobado, (6,7,8) aprobado (9) excelente (10) con honores y un default de no presento

    function alumniCal(n){
        let status = "";
        switch (n){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            status = "reprobado"
        break;
        case 6:
        case 7:
        case 8:
            status = "aprobado"
        break;
        case 9:
            status = "excelente"
        break;
        case 10:
            status = "con honores"
        break;
        default:
            status = "no presento"

        }
        return status;
    }
    
            console.log(alumniCal(3));
            console.log(alumniCal(7));
            console.log(alumniCal(9));
            console.log(alumniCal(10));
            console.log(alumniCal(11));

            