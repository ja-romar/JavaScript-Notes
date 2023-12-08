let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    userObj.data.friends.push(friend); //Usamos la notacion de puntos para acceder primero a el data de userObj(en el ejemplo user)
    //Despues accedemos a friends y con el metodo push() empumaos el valor que se incluya a friend en el ejemplo 'Pete'
    return userObj.data.friends; //Retornamos el valor de friends de data del objeto user.
  }
  
  console.log(addFriend(user, 'Pete'));

  console.log(user);