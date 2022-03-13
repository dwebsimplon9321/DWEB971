/**
 * https://pokeapi.co/docs/v2#pokemon-section  (documentation)
 * 
 * api url : https://pokeapi.co/api/v2/
 * url gender : https://pokeapi.co/api/v2/gender/
 * 
 * 
 * 
 * results: Array(10) [ {…}, {…}, {…}, … ]
​​
0: Object { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" }
​​​
name: "bulbasaur"
url: "https://pokeapi.co/api/v2/pokemon/1/"
<prototype>: Object { … }
​​
1: Object { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" }
2: Object { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" }
3: Object { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" }
4: Object { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" }
5: Object { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" }
6: Object { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" }
7: Object { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" }
8: Object { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" }
9: Object { name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/" }
length: 10
 */


// balise html
const listePU = document.querySelector("ul.liste-poke");
const chargement = document.querySelector("div.loader");


/* 3 - tableaux  */
// listes pokes
let allPokemon = [];
let tableauFin = [];
let cpTab = [];
const nbrPoke = 102;


/* 2 - appel API pokemon */
function findPoke(){

    // url api pour recherche
    fetch("https://pokeapi.co/api/v2/pokemon?limit="+nbrPoke)  // https://pokeapi.co/api/v2/pokemon?limit=451

    // response
    .then(reponse => reponse.json())   // sortie format json
    .then((allPoke => {
        //console.log(allPoke);

        // boucle foreach sur chaque resultat de pokemon
       allPoke.results.forEach(pokemon => {

            // chargement informations complete du pokemon dans notre fonction fullInfoPoke
            fullInfoPoke(pokemon);
        });
    }))
}

// executer function findPoke
findPoke();


/* 4 - fonction */
function fullInfoPoke(pokemon){

    // caracteristique complete du pokemon dans objet objetPokeFull
    let objetPokeFull = {};

    // format des caracteristiques du poke / pour chaque poke
    let urlPoke = pokemon.url;
    let namePoke = pokemon.name;


    // a partir de chaque url refaire un appel 
    fetch(urlPoke)

    // response
    .then(reponse => reponse.json())   // sortie format json
    .then((dataPoke => {
        //console.log(dataPoke);


/**
     * Object { abilities: (2) […], base_experience: 64, forms: (1) […], game_indices: (20) […], height: 7, held_items: [], id: 1, is_default: true, location_area_encounters: "https://pokeapi.co/api/v2/pokemon/1/encounters", moves: (83) […], … }
​
        abilities: Array [ {…}, {…} ]
        ​​
        0: Object { ability: {…}, is_hidden: false, slot: 1 }
        ​​​
        ability: Object { name: "overgrow", url: "https://pokeapi.co/api/v2/ability/65/" }
        ​​​​
        name: "overgrow"
        ​​​​
        url: "https://pokeapi.co/api/v2/ability/65/"
        ​​​​
        <prototype>: Object { … }
        ​​​
        is_hidden: false
        ​​​
        slot: 1
        ​​​
        <prototype>: Object { … }
        ​​
        1: Object { ability: {…}, is_hidden: true, slot: 3 }
        ​​​
        ability: Object { name: "chlorophyll", url: "https://pokeapi.co/api/v2/ability/34/" }
        ​​​
        is_hidden: true
        ​​​
        slot: 3
        ​​​
        <prototype>: Object { … }
        ​​
        length: 2
        ​
        base_experience: 64
        ​
        forms: Array [ {…} ]
        ​
        game_indices: Array(20) [ {…}, {…}, {…}, … ]
        ​
        height: 7
        ​
        held_items: Array []
        ​
        id: 1
        ​
        is_default: true
        ​
        location_area_encounters: "https://pokeapi.co/api/v2/pokemon/1/encounters"
        ​
        moves: Array(83) [ {…}, {…}, {…}, … ]
        ​
        name: "bulbasaur"
        ​
        order: 1
        ​
        past_types: Array []
        ​
        species: Object { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon-species/1/" }
        ​
        sprites: Object { back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png", back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png", front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", … }
        ​​
        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
        ​​
        back_female: null
        ​​
        back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png"
        ​​
        back_shiny_female: null
        ​​
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        ​​
        front_female: null
        ​​
        front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"
        ​​
        front_shiny_female: null
        ​​
        other: Object { dream_world: {…}, home: {…}, "official-artwork": {…} }
        ​​
        versions: Object { "generation-i": {…}, "generation-ii": {…}, "generation-iii": {…}, … }
        ​​
        <prototype>: Object { … }
        ​
        stats: Array(6) [ {…}, {…}, {…}, … ]
        ​
        types: Array [ {…}, {…} ]
        ​​
        0: Object { slot: 1, type: {…} }
        ​​​
        slot: 1
        ​​​
        type: Object { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
        ​​​
        <prototype>: Object { … }
        ​​
        1: Object { slot: 2, type: {…} }
        ​​​
        slot: 2
        ​​​
        type: Object { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
        ​​​
        <prototype>: Object { … }
        ​​
        length: 2
        ​​
        <prototype>: Array []
        ​
        weight: 69
        ​
        weight: 69
        ​
        <prototype>: Object { … }
        poke.js:71:17
        Object { abilities: (2) […], base_experience: 142, forms: (1) […], game_indices: (20) […], height: 10, held_items: [], id: 2, is_default: true, location_area_encounters: "https://pokeapi.co/api/v2/pokemon/2/encounters", moves: (77) […], … }
        poke.js:71:17
        Object { abilities: (2) […], base_experience: 263, forms: (1) […], game_indices: (20) […], height: 20, held_items: [], id: 3, is_default: true, location_area_encounters: "https://pokeapi.co/api/v2/pokemon/3/encounters", moves: (90) […], … }
        poke.js:71:17
        ...
        ​
     */

        // info que l'on souhaite utiliser
        /**
         * - 
         * - name
         * - sprites les images : front_default , back_default
         * - types les types : types[0].type.name
         */

        // remplir notre objet objetPokeFull des infos selectionnes
        objetPokeFull.name = dataPoke.name;   // nom en anglais
        objetPokeFull.id = dataPoke.id;
        
        // recuperer image      
        if(dataPoke.sprites.back_female !== null){
            
            objetPokeFull.photoF = dataPoke.sprites.back_female;
            objetPokeFull.photoB = dataPoke.sprites.front_female;
            objetPokeFull.sexe = "female"
        } else {
            objetPokeFull.photoF = dataPoke.sprites.front_default;
            objetPokeFull.photoB = dataPoke.sprites.back_default;
            objetPokeFull.sexe = "mal"
        }
        objetPokeFull.type = dataPoke.types[0].type.name;

    
       
        // recuperer les specifications d1 poke avec url formate
        //fetch('https://pokeapi.co/api/v2/pokemon-species/'+dataPoke.name)  // ou autre solution
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${namePoke}`)       // use backtip ` altGr+7 accent grave https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Template_literals
        /**
         * avoir la langue sur le nom
         * 
         * names: Array(11) [ {…}, {…}, {…}, … ]
​​
        0: Object { language: {…}, name: "フシギダネ" }
        ​​
        1: Object { language: {…}, name: "Fushigidane" }
        ​​
        2: Object { language: {…}, name: "이상해씨" }
        ​​
        3: Object { language: {…}, name: "妙蛙種子" }
        ​​
        4: Object { language: {…}, name: "Bulbizarre" }
        ​​​
        language: Object { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" }
        ​​​
        name: "Bulbizarre"
        ​​​
        <prototype>: Object { … }
        ​​
        5: Object { language: {…}, name: "Bisasam" }
        ​​
        6: Object { language: {…}, name: "Bulbasaur" }
        ​​
        7: Object { language: {…}, name: "Bulbasaur" }
        ​​
        8: Object { language: {…}, name: "Bulbasaur" }
        ​​
        9: Object { language: {…}, name: "フシギダネ" }
        ​​
        10: Object { language: {…}, name: "妙蛙种子" }
        ​​
        length: 11
         */


        // response
        .then(reponse => reponse.json())   // sortie format json
        .then(dataPoke => {
            //console.log(dataPoke);

            objetPokeFull.genre = dataPoke.gender_rate;
            // afficher nom en fr dans objet 
            objetPokeFull.nom = dataPoke.names[4].name;
            objetPokeFull.couleur = dataPoke.color.name;

            // martine : son histoire
            objetPokeFull.histoire = dataPoke.flavor_text_entries[16].flavor_text;


            objetPokeFull.genera = dataPoke.genera[3].genus;
            objetPokeFull.habitat = dataPoke.habitat.name;
            objetPokeFull.evolution = dataPoke.growth_rate.name;

            // ajouter tous les objets dans le tableau
            allPokemon.push(objetPokeFull);

            // verifier le compte d'info des pokes
            if(allPokemon.length === nbrPoke){
               //console.log(allPokemon);

               // trier tableau par ids 
               /**
                * explication: 
                * a = valeur courante, 1er element du tableau et le place dans b
                * renvoi 3 valeurs possible :
                * a > b ou a < b ou a = b
                * en fonction de resultat soit a est avant b, ou bien b avant a en fonction
                * du résultat
                * 
                * sort permet de trier 1 element avec tous les autres, de le place avant ou après
                * ou ne pas bouger ainsi de suite.
                * 
                * ATTENTION POUR LE MOMENT allPokemon semble triee
                */
               tableauFin = allPokemon.sort((a, b) => {

                    // position element tableau dans l'ordre et
                    // couper tous les 21 pokes
                    
                    return a.id - b.id;

               }).slice(0, 21);

                //console.log(tableauFin);

               createCarte(tableauFin);

               /* 9 icone de chargement */
               chargement.style.display = "none";

            }


        })

 
    }))

    

}

// creation descolcolcol cartes
/**
 * 
 * couleur: "green"
evolution: "medium-slow"
genera: "Pokémon Graine"
genre: 1
habitat: "grassland"
histoire: "Au matin de sa vie, la graine sur\nson dos lui fournit les éléments\ndont il a besoin pour grandir."
id: 1
name: "bulbasaur"
nom: "Bulbizarre"
photoB: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
photoF: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
sexe: "mal"
type: "grass"
 */


function createCarte(tab){
   
    // lire tab
    for (let i = 0; i < tab.length; i++) {
        
        //console.log(tab[i]);

        //colcolcol carte avec couleur
        const carte = document.createElement("li");
        let couleur = tab[i].couleur;
        carte.style.backgroundColor = couleur;

        // ajouter nom du poke
        const nomCarte = document.createElement("h3");
        nomCarte.innerHTML = tab[i].name;
        
        const idCarte = document.createElement("p");
        idCarte.setAttribute("class", "idC");
        idCarte.innerHTML = "ID :"+tab[i].id;

        const histoire = document.createElement("p");
        histoire.innerHTML = tab[i].histoire;

        const imgCarte = document.createElement("img");
        imgCarte.src = tab[i].photoF;
        imgCarte.setAttribute("alt", tab[i].name);

        // ajouter element dans li
       carte.appendChild(nomCarte);
       carte.appendChild(idCarte);
       carte.appendChild(imgCarte);
       carte.appendChild(histoire);

        // recupere ul
        listePU.appendChild(carte);


    }
}

/* 5 - scroll infini - evenement sur fenetre et scroll -- fonction fleche */
window.addEventListener("scroll", () => {
    // declaration muliti variable de type constante
    /**
     * scrollTop = difference entre ce que l'on a scroller depuis le top
     * scrollHeight = la hauteur total
     * clientHeight = la hauteur de la page actuellement deja scrolle visible
     */

    const {scrollTop, scrollHeight, clientHeight } = document.documentElement;
    //console.log(scrollTop, scrollHeight, clientHeight);  


    // ajouter 6colcolcol cartes / scroll 
    if(clientHeight + scrollTop >= clientHeight - 20 ){  // -20px
        addPoke(6);
    } 

});

/* 6 function chargement poke en plus */

let index = 21; // nombre de poke deja charge

function addPoke(nbAddP){

    // fin chargement des pokes
    if(index > nbrPoke){
        return;
    }

    // ajouter les autres pokes
    /**
     * ajoute un morceau de tableau tabToAdd avec 6 nouveaux pokes 
     * (extraire de allPokemon les 6 nouveaux pokes apres le 1er charges)
     * cela fait 21 + 6 = 27
     */
    const tabToAdd = allPokemon.slice(index, index+nbAddP);

    // ajouter morceau de tableau a l'existant en affichage
    createCarte(tabToAdd);

    // actualisation de index
    index += nbAddP;    // ex : 21+6, 27+6, ... 
}


/*  1 - animation input label */
const inputL = document.querySelector("input#find");
inputL.addEventListener("input", function(e){
    //console.log(e);

    // input vide 
    if(e.target.value !== ''){
        // add classe in form
        //console.log(e.target.parentNode.parentNode);
        /**
         * input - div - form
         */
        e.target.parentNode.parentNode.classList.add("active-input");

    } else if(e.target.value === ''){
        e.target.parentNode.parentNode.classList.remove("active-input");
    }
});

/* 7 systeme de recherche  */
inputL.addEventListener("keyup", recherche); 

/* 8 avec le bouton de recherche */ // pas obligatoire sinon retirer keyup
const formR = document.querySelector("form");
formR.addEventListener("submit", (e) => {
    // empecherche le chargement de la page
    e.preventDefault();

    // lancher la recherche
    recherche();
});

function recherche(){
    // quand on ecrit ajouter tout les pokes
    if(index < nbrPoke){
        addPoke(nbrPoke);
    }

    // declaration plusieurs variables vide;
    let filter, allLi, titleValue, allTitles;

    // mettre en majuscule la saisie
    filter = inputL.value.toLowerCase();
    allLi = document.querySelectorAll("li");
    allTitles = document.querySelectorAll("li > h3");

    // boucle for
    for(let i=0; i<allLi.length; i++){
        // recuperer les titres
        titleValue = allTitles[i].innerHTML;

        // si recherche existe
        if(titleValue.toLocaleLowerCase().indexOf(filter) > -1){
            // affichage
            allLi[i].style.display = "flex";

        } else {
            allLi[i].style.display = "none";
        }
    }


}


