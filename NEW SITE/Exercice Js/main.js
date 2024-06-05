// var personne = {
//     nom : 'Gabrielle',

//     id : function () {
//         return 'nom : ' + this.nom;
//     }
// }

// alert(personnel.id());

// FuzZBuzz
var index = 0;
for (let index = 0; index < 30; index++) {


    if (index % 5 == 0) {
        alert("Buzz: " + index + " est divisible par 5\n");
    }

    else if (index % 3 == 0) {
        alert("Fuzz: "  + index + " est divisible par 3\n");
    }

    else if(index % 3 && 5 == 0){
        alert("FuzzBuzz: "  + index + " est divisible par 5 et 3\n");
    }

    else{
        alert("No Fuzz No Buzz No FuzzBuzz");
    }
}