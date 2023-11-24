

function zeroArray(m, n) {
    // Crea un arreglo de 2 dimensiones con m filas y n columnas de ceros
    let newArray = [];
    for (let i = 0; i < m; i++) {
    let row = [];
      // Agrega la fila número m a newArray
  
      for (let j = 0; j < n; j++) {
        // Inserta n ceros a la fila actual para crear las columnas
        row.push(0);
      }
      // Inserta la fila actual, que ahora contiene n ceros, al arreglo
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(1, 2);
  console.log(matrix);
  