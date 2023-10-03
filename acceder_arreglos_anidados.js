/* para acceder a arreglos anidados podemos encadenar notacion de corechetes para acceder a dichos arreglos */

    const thrashAlbums = [
        {
            name: "Rust in Peace",
            songs: ["hangar 18", "Rust in peace polaris",
            "tornado of souls", "Take no prisioners"
             ]
        },
        {
            name: "Spreading the Disease",
            songs: ["The Enemy","The Enemy", 
            "Aftershock"
            ]
        }
    ]

    const bestSoong = thrashAlbums[0].songs[1];

    console.log(bestSoong)