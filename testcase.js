    
    
    
    
    
    
    function frontDoorPassword(word) {
    word = word.toLowerCase();
    word = word.charAt(0).toUpperCase() + word.slice(1);
    return word;
  }

  console.log(frontDoorPassword("SUMMMER"))