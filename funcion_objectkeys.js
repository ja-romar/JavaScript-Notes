//Ejemplo de funcion con el metodo Objectkeys()


let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };

  let players = {
    Lewandowski: {
        age: 35,
        lineup: true
    },
    Pedri: {
        age: 21,
        lineup: true
    }
  };

function getArrayOfUsers(obj) {
      return Object.keys(obj);
  }

  console.log(getArrayOfUsers(users)); //Esta consola devolvera los users del objecto users
  console.log(getArrayOfUsers(players)); //Esta consola devolvera los players del objeto players