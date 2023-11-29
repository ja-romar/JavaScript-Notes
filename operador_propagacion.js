
let opPropArray = ["Hello", "copy", "me"];
let copyArray = [...opPropArray]

console.log('Arreglo original: ' + opPropArray);
console.log('Arreglo copia: ' + copyArray);



//Operador de propagacion

    
    function addName (name) {
        let nameArra = [name];
        let defSentence = ["I'm ", ...name, "And i like to code"];
        return defSentence.join('');
    }
     console.log(addName("Javier "))