

let nestedArray = [ //primer nivel multidimensional
    ['deep'], //Este array se encuentra en el primer nivel del arreglo (notacion 0 0)
    [
      ['deeper1'], ['deeper'] 
    ],
    [
      [
        ['deepestr'], ['deepest']
      ],
      [
        [
          ['deepest-est?']
        ]
      ]
    ]
  ];

 /* console.log(nestedArray[2][0][1][0][3]); */  
  console.log(nestedArray[0][0]); //En esta consola estamos accediendo a "deep" diciendole con el primer 0 que entre al primer nivel
  //con el segundo cero que tome el primer array del primer nivel.
  console.log(nestedArray[1][0][0]); //Estamos accediendo al nivel dos de anidamiento [1] al elemento cero de ese anidamiento [0]
  // y nuevamente al elemento [0] de ese anidamiento.
  console.log(nestedArray[2][0][0][0]); //Accedemos a 'deepestr' accediendo al tercer nivel [2] al primer array de dicho nivel
  //posteriormente al primer nivel tambien de ese array [0] y al primer elemento de ese ultimo array [0]
  //LA SIGUIEENTE CONSOLA MOSTRARA QUE PASA SI CAMBIAMOS EL PENULTIMO CERO POR EJEMPLO POR 1
  console.log(nestedArray[2][0][1][0]); //Accedemos al segundo deepest
  ///
  console.log(nestedArray[2][1][0][0][0])//Finalmente accedemos al ultimo elemento anidado
  //Incluso podriamos acceder a letras dentro de ese elemento de la siguiente forma

console.log(nestedArray[2][1][0][0][0][10]) //Estamos accediendo a la letra t del array