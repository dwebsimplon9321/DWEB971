/*
Je vous demande de créer un jeu simple de devinette de nombre. 
Le jeu choisit aléatoirement un nombre entre 1 et 250, 
puis il met le joueur au défi de le deviner en 12 tentatives maxi. 
À chaque tour, le joueur doit être informé s'il a deviné ou non le bon nombre 
— si ce n'est pas le cas, le jeu lui indique si son estimation est trop basse ou trop élevée. 
Le jeu doit également rappeler au joueur les nombres déjà proposés. 
Le jeu se termine quand le joueur a deviné le nombre mystère, ou s'il a épuisé ses 15 chances. 
À la fin du jeu, le joueur a la possibilité de débuter une nouvelle partie.
*/

/*
Générer un nombre aléatoire entre 1 et 250.
Stocker le nombre de tours déjà joués. Commencer par 0.
Fournir au joueur le moyen de saisir un nombre. (et recuperer la saisi du joueur)
Stocker l'ensemble des propositions de nombres pour que le joueur puisse les consulter.
Vérifier si le nombre saisi par le joueur est correct.
S'il est correct :
Afficher un message de félicitations.
Empêcher que le joueur saisisse de nouveau un nombre.
Afficher un contrôle pour que le joueur puisse rejouer.
S'il est faux et que le joueur a encore des tours à jouer :
Informer le joueur que sa proposition de nombre est fausse.
Lui permettre d'entrer une nouvelle proposition de nombre.
Incrémenter le nombre de tours de 1.
S'il est faux et que le joueur n'a plus de tours à jouer :
Informer le joueur qu'il a perdu et que la partie est finie.
Empêcher que le joueur saisisse de nouveau un nombre.
Afficher un contrôle pour que le joueur puisse rejouer.
Une fois le jeu redémarré, s'assurer que la logique du jeu et l'interface utilisateur sont complètement réinitialisées, puis revenir à l'étape 1.
*/


/* tirage alleatoire */
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * max) + min;
}

let nombre = getRandomArbitrary(1, 250);

/* Nombre de tour joue */
let tour = 0;


/* saisie du joueur */
let saisie = document.querySelector("div.proposition");




/* ecouteur */
let button = document.querySelector("button");

button.addEventListener("click", function(){

    /* nombre saisie */
    let joueur = document.getElementById("reponse");

    /* ajouter chaque saisie */
    saisie.append(" "+joueur.value);

    /* verifier la saisie et le nombre genere */
    if(joueur.value == nombre){
        //alert("bingo");
        let bingo = document.querySelector("div.reponse");
        bingo.innerHTML = '<p class="alert alert-success" role="alert"><img src="../image/boxing.jpg" alt="Rudy and Peter Skitterians  pixabay - gagnant" />BINGO !!!</p>';

        /* input lecture seul */
       // console.log(joueur);
        joueur.setAttribute("readonly", '');

        /* et supprimer le bouton */
        this.parentNode.removeChild(this);
        

        /* ajouter un bouton pour rejouer avec du texte */
       /* let newB = document.createElement("button");
        newB.setAttribute("type", "button");
        newB.setAttribute("class", "btn btn-primary");
        newB.setAttribute("onclick", 'document.location.reload(false)');
        // texte dans bouton
        let newT = document.createTextNode("Lancer une nouvelle partie !!");
        newB.appendChild(newT);
        
        let divR = document.querySelector("div.row.g-3.align-items-center");
        divR.after(newB); */

        /* efface le champs de saisie */
       /* newB.addEventListener("click", function(){
            joueur.value = ""; 
        });*/

         /* ajouter bouton rejouer */
         rejouer();

         return false;

    } else {
        /*alert("essaie encore"); */
        let bingo = document.querySelector("div.reponse");
        bingo.innerHTML = '<p class="alert alert-danger" role="alert">Hooo essaie encore !!!</p>';
        

        /* indice */
        let indice = document.querySelector("div.indice");

        tour += 1;  // if tour = 15 = stop
        //console.log(tour);

        if( tour === 15){
            // stop

            /* input lecture seul */
            joueur.setAttribute("readonly", '');

             /* et supprimer le bouton */
            this.parentNode.removeChild(this);

            /* texte perdu */
            let newD = document.createElement("div");
            newD.setAttribute("class", "perdu alert alert-danger");

            let newP = document.createElement("p");

            // texte
            let newT = document.createTextNode("PERDU !!");
            newP.appendChild(newT);

            newD.appendChild(newP);

            /* ajouter bouton rejouer */
            rejouer();

            let divR = document.querySelector("div.row.g-3.align-items-center");
            divR.after(newD);


        } else {

            if(joueur.value > nombre){
                indice.innerHTML = '<p class="alert alert-info" role="alert"><img src="../image/samuel-glacial_emodji.png" alt="Christian Dorn pixabay - glacial emodji" /></p>';
                joueur.value = ""; 
            } else {
    
                /* on se rapproche de la bonne reponse  */
                if( (nombre / 2) > joueur.value){
                    indice.innerHTML = '<p class="alert alert-info" role="alert"><img src="../image/samuel-glacial_emodji.png" alt="Christian Dorn pixabay - glacial emodji" /></p>';
                    joueur.value = ""; 
                } else {
                    indice.innerHTML = '<p class="alert alert-warning" role="alert"><img src="../image/samuel-chaud_emodji.png" alt="Christian Dorn pixabay - branlant emodji" /></p>';
                    joueur.value = ""; 
                }
            }

        }


    }

    /*  comparer saisie et nombre  */
    console.log(nombre);

   
}, false);

/* retirer ecouteur sur button */
button.removeEventListener("click", function(){
}, false); 

/* function ajouter bouton rejouer */
function rejouer(){
    let newB = document.createElement("button");
    newB.setAttribute("type", "button");
    newB.setAttribute("class", "btn btn-primary");
    newB.setAttribute("onclick", 'document.location.reload(false)');
    // texte dans bouton
    let newT = document.createTextNode("Lancer une nouvelle partie !!");
    newB.appendChild(newT);
    
    let divR = document.querySelector("div.row.g-3.align-items-center");
    divR.after(newB);

     /* efface le champs de saisie */
     newB.addEventListener("click", function(){
        let joueur = document.getElementById("reponse");
        joueur.value = ""; 
    }, false);

    /* retirer ecouteur sur newB */
    newB.removeEventListener("click", function(){
    }, false);

}




/*
https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random
https://developer.mozilla.org/en-US/docs/Web/API/Element/append
https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute
https://developer.mozilla.org/fr/docs/Web/API/Node/parentNode
https://developer.mozilla.org/fr/docs/Web/API/Document/createElement
https://developer.mozilla.org/en-US/docs/Web/API/Element/after
https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#op%c3%a9rateurs_de_comparaison

*/