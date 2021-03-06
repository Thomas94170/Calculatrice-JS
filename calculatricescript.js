// Etape 1: do while en param while le code ci dessous pour que si choix differents boucle recommence
// specifié dans la var choix que le prompt sera un nombre et non une chaine de caracteres

// Etape 2: stocker les 2 nbres demandés dans 2 var premierNombre et deuxiemeNombre
// Vérifier qu'il s'agisse bien de 2 nbres avec la fonction isNaN (variable)
// renvoyant true si la var n'est pas un nombre

// Etape 3: créer notre 4 fonctions Addition, Multiplication, Soustraction, Division

// Etape 4: Utiliser un switch pour vérifier nos cas 1 2 3 4. Dans chaque cas appelé la fonction souhaitée
//  Stocker la valeur de retour de notre fonction dans une variable resultat

// Etape 5: Afficher le résultat dans une boite de dialogue et le faire après notre switch

// Etape 6: créer 2 exceptions 1 dans le default du switch (une erreur est survenue
// via une alert), et 1 dans la fonction division, lorsque nombreB = 0


// Etape 3: on met les fonctions en dehors des boucles;
function Addition(nombreA, nombreB) {

    return nombreA + nombreB;
   
}



function Multiplication(nombreA, nombreB) {

    return nombreA * nombreB;
    
}



function Soustraction(nombreA, nombreB) {

    return nombreA - nombreB;
    
}



function Division(nombreA, nombreB) {

    // Etape6 on ne divise pas par 0
    if (nombreB ==0) {
        throw new Error ('Impossible de diviser par 0');
    }
    return nombreA / nombreB;

}


// Etape1
do {

    var choix = Number (prompt ('Que souhaitez vous faire? :\n\n 1-Addition\n 2-Multiplication\n 3-Soustraction\n 4-Division '));
    
} while (choix!=1 && choix !=2 && choix != 3 && choix !=4)


// Etape2
do {

var premierNombre =  Number(prompt('Entrer un premier nombre'));
var deuxiemeNombre = Number(prompt('Entrer un deuxieme nombre'));
 
} while (isNaN(premierNombre) || isNaN(deuxiemeNombre));


// Etape4

// Etape6, il faut glisser notre switch dans un bloc try afin que les exceptions 
// soient prises en compte

try {
    
    switch (choix) {
        case 1:
            var resultat = Addition(premierNombre, deuxiemeNombre);
       
            break;
        case 2:
            var resultat = Multiplication(premierNombre, deuxiemeNombre);
            
            break;
        case 3:
            var resultat = Soustraction(premierNombre, deuxiemeNombre);
            
            break;
        case 4:
            var resultat = Division(premierNombre, deuxiemeNombre);
            
            break;
        
        default:
            throw new Error('une erreur est survenue');
            // Etape6
    
         
    }
    
// Etape5 et ultime étape deplacement de mon alerte dans le try pour que si erreur la fenetre s 'arrete
alert('Résultat : '+ resultat);
} 
catch (error) {
    alert(error);
}

