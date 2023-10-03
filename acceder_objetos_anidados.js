/* podemos acceder a las sub propiedades de objetos complejos anidados combinando notacion de puntos y notacion
de corchetes */

    const myHouse = {
        "room":{
            "bathroom":{
                "bathtub": "soap",
                "washbasin": "teethbrus"
            },
            "outside": {
                "garage": "car"
            }
        }
    };

    
    houseObject = myHouse.room.bathroom["bathtub"]; 
    houseObject = myHouse.room.outside["garage"];

    console.log(houseObject)
    

