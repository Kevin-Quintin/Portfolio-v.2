// UTILISATION DES TOOLTIPS
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// ----------------------------------------------------------- CALCULATRICE ---------------------------------------------------------- //
let btnCalcultrice = document.getElementById("calculette");
btnCalcultrice.addEventListener("click", calculatrice);

function calculatrice(){
do {
  // Première étape je demande quel calcul l'utilisateur veut faire.
do {
  var choix = parseInt(prompt("Que souhaitez-vous faire ?\n\n1 - Addition\n2 - Multiplication \n3 - Soustraction\n4 - Division\n"));
} 
while (choix != 1 && choix != 2 && choix != 3 && choix != 4)

// Je veux que l'utilisateur rentre uniquement un nombre, et qu'une boucle se fasse tant que ce n'est pas le cas.
do {
  var premierNombre = Number(prompt("Entrez le premier chiffre: "));
} while (isNaN(premierNombre));

do {
  var deuxiemeNombre = Number(prompt("Entrez le second chiffre: "));
} while (isNaN(deuxiemeNombre));

// Je met en place les différentes possibilités.
try {
  switch (choix) {
      case 1:
          alert("Le résultat de votre addition est : " + addition(premierNombre, deuxiemeNombre));
          break;
  
      case 2:
          alert("Le résultat de votre multiplication est : " + multiplication(premierNombre, deuxiemeNombre));
          break;
  
      case 3:
          alert("Le résultat de votre soustraction est : " + soustraction(premierNombre, deuxiemeNombre));        
          break;
  
      case 4:
          alert("Le résultat de votre division est : " + division(premierNombre, deuxiemeNombre));
          break;
  
      default:
          throw new Error("Une erreur est survenu");
  }
} catch (error) {
  alert(error);
}


// Dans cette partie je créer les fonction qui me seront nécessaire pour effectuer les calculs.
function addition(nombreUn, nombreDeux) {
  return resultat = nombreUn + nombreDeux;
}

function soustraction(nombreUn, nombreDeux) {
  return resultat = nombreUn - nombreDeux;
}

function multiplication(nombreUn, nombreDeux) {
  return resultat = nombreUn * nombreDeux;
}

function division(nombreUn, nombreDeux) {
  if (nombreDeux == 0) {
      throw new Error("Impossible de diviser par 0.");
  }
  return resultat = nombreUn / nombreDeux;
}
} while (confirm("Voulez-vous utiliser la calculatrice?"))
};

// ----------------------------------------------------------- CITATIONS ---------------------------------------------------------- //
let citations = [
  ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi"],
  ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg"],
  ["Méritez votre statut de leader chaque jour.", "Mickael Jordan"],
  ["Soyez le changement que vous voulez voir dans le monde.", "Gandhi"],
  ["A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.", "Mark Twain"],
  ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.", "T.S Elliot"],
  ["Le succès c’est tomber sept fois, se relever huit.", "Proverbe japonais"],
  ["Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.", "Mark Twain"],
  ["Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.", "Brian Tracy"],
  ["Quand on concentre son attention sur un seul projet, l’esprit suggère constamment des idées et des améliorations qui lui échapperaient s’il était occupé avec plusieurs projets en même temps.", "P.T. Barnum"],
  ["Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.", "Brian Sher"],
  ["Si vous pensez que vous êtes trop petit pour avoir de l’impact, essayez d’aller au lit avec un moustique.", "Anita Roddick"],
  ["Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.", "Robert Louis Stevenson"],
  ["L’action est la clé fondamentale de tout succès.", "Pablo Picasso"],
  ["Le succès, c’est se promener d’échecs en échecs tout en restant motivé.", "Winston Churchill"],
  ["Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.", "Robert T. Kiyosaki"],
  ["Ne vous découragez pas, c’est souvent la dernière clef du trousseau qui ouvre la porte.", "Zig Ziglar"],
  ["Pour gagner votre vie, apprenez à l’école. Pour gagner une fortune, apprenez par vous-même.", "Brian Tracy"],
  ["Les gagnants trouvent des moyens, les perdants des excuses…", "F. D. Roosevelt"],
  ["Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.", "C.S. Lewis"],
  ["Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit une opportunité dans chaque difficulté.", "Winston Churchill"]
];

// Les éléments à récupérer
let citation = document.getElementById('phrase');
let auteur = document.getElementById('auteur');
let btn = document.getElementById('nouveau');

// Créer les variables nécessaires
let dernier = 0;
let nombreAleatoire = 0;

// Créer l'écouteur d'événement
btn.addEventListener('click', () => {
  do {
      nombreAleatoire = genererNombreEntier(citations.length);
      
      
  } while (nombreAleatoire == dernier);

  citation.textContent = citations[nombreAleatoire][0];
  auteur.textContent = citations[nombreAleatoire][1];
  dernier = nombreAleatoire;
})

// Utiliser un générateur de nombre aléatoire
function genererNombreEntier(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// ----------------------------------------------------------- LE JUSTE PRIX ---------------------------------------------------------- //
// Etape 1 - Sélectionner nos éléments

let input = document.getElementById('prix');
let error = document.querySelector('small');
let formulaire = document.getElementById('formulaire');

// Etape 2 - Cacher l'erreur
error.style.display = 'none';

// Etape 3 - Générer un nombre aléatoire
let nbAleatoire = Math.floor(Math.random() * 1001);
let coups = 0;
let nombreChoisi;

// Etape 6 - Créer la fonction vérifier
function verifier(nombre){
  let instruction = document.createElement('div');

  if (nombre < nbAleatoire) {
    instruction.textContent = "#" + coups +" (" + nombre + ") C'est plus";
    instruction.className = 'instruction plus';
  } else if(nombre > nbAleatoire) {
    instruction.textContent = "#" + coups +" (" + nombre + ") C'est moins";
    instruction.className = 'instruction moins';
  } else {
    instruction.textContent = "#" + coups +" (" + nombre + ") Félicitations vous avez trouvé le juste prix";
    instruction.className = 'instruction fini';
    input.disabled = true;
  }

  document.getElementById('instructions').prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
  if(isNaN(input.value)) {
    //Afficher le message d'erreur

    error.style.display = 'inline';
  } else {
    // Cacher le message d'erreur
    error.style.display = 'none';
  }
});

// Etape 5 - Agir à l'envoi du formulaire
document.getElementById('deviner').addEventListener('click', (e) => {
  e.preventDefault();

  if(isNaN(input.value) || input.value == ''){
    // Mettre la bordure du formulaire en rouge
    input.style.borderColor = 'red';
  } else {
    // Mettre la bordure en gris
    coups++;
    input.style.borderColor = 'silver';
    nombreChoisi = input.value;
    input.value = '';
    verifier(nombreChoisi);
  }
});

// ----------------------------------------------------------- MODE SOMBRE ---------------------------------------------------------- //
let btn_switch = document.getElementById("mode_sombre_pour_switch");
let message = document.getElementById("message");

btn_switch.addEventListener('click', verifierMode)

function appelerModeSombre(){
  document.querySelector('body').className = 'dark';  
  message.textContent = "Mode sombre";
  localStorage.setItem('modeSombre', true)
}

function verifierMode(){
  if (document.body.classList.value !== 'dark') { // Si il n'y a pas d'élément dark sur notre body
    // On ajoute cette classe à notre body
    message.textContent = "Mode clair";
    appelerModeSombre()
  } else {
    // On l'enlève
    document.querySelector('body').className = 'bg-light';
    message.textContent = "Mode clair";
    localStorage.clear();
  }
}

if (localStorage.getItem('modeSombre')) {
  // SI la variable est stocké je fais ceci
  appelerModeSombre();
} else {
  // Sinon je fais ceci
}

// ----------------------------------------------------------- FIGHT SIMULATOR ---------------------------------------------------------- //
class Personnage {
  constructor (pseudo, classe, sante, attaque) {
    this.pseudo = pseudo;
    this.classe = classe;
    this.sante = sante;
    this.attaque = attaque;
    this.niveau = 1;
  }

  evoluer(){
    this.niveau++;
    console.log(this.pseudo + " passe au niveau " + this.niveau + " !")
  }

  verifierSante(){
    if(this.sante <= 0){
      this.sante == 0;
      console.log(this.pseudo + " à perdu.")
    }
  }

  get informations(){
    return this.pseudo + " " + this.classe + " a " + this.sante + " points de vie et est au niveau " + this.niveau + ".";
  }
}

class Magicien extends Personnage{
  constructor (pseudo){
    super(pseudo, "Magicien", 170, 90);
  }

  attaquer(personnage){
    personnage.sante -= this.attaque;
    console.log(this.pseudo + " attaque "+ personnage.pseudo + " en lançant un sort (" + this.attaque + " dégâts).")
    this.evoluer();
    personnage.verifierSante();
  }

  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(this.pseudo + " attaque avec son coup spécial puissance des arcanes "+ personnage.pseudo + " (" + ([this.attaque * 5] + " dégâts)."));
    this.evoluer();
    personnage.verifierSante();
  }
}

class Guerrier extends Personnage {
  constructor(pseudo){
    super(pseudo, "Guerrier", 350, 50);
  }

  attaquer(personnage){
    personnage.sante -= this.attaque;
    console.log(this.pseudo + " attaque "+ personnage.pseudo + " avec son épée (" + this.attaque + " dégâts).")
    this.evoluer();
    personnage.verifierSante();
  }

  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(this.pseudo + " attaque avec son coup spécial avec ses haches de guerre "+ personnage.pseudo + " (" + ([this.attaque * 5] + "dégâts)."));
    this.evoluer();
    personnage.verifierSante();
  }
}

var gandalf = new Magicien('Gandalf');
var thor    = new Guerrier('Thor');

document.getElementById('fight').addEventListener('click', () => {
  console.log(thor.informations);
  console.log(gandalf.informations);
  gandalf.attaquer(thor);
  console.log(thor.informations);
  thor.attaquer(gandalf);
  console.log(gandalf.informations);
  gandalf.coupSpecial(thor);
})




// ----------------------------------------------------------- METEO ---------------------------------------------------------- //
let villeChoisie;

if ('geolocation' in navigator) {
    navigator.geolocation.watchPosition((position) => {
        const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon='+
         position.coords.longitude+ '&appid=06c3c58ff8d070aa2d64fdfb20af20ad&units=metric';

        let requete = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
        requete.open('GET', url); // Nous récupérons juste des données
        requete.responseType = 'json'; // Nous attendons du JSON
        requete.send(); // Nous envoyons notre requête

        // Dès qu'on reçoit une réponse, cette fonction est executée
        requete.onload = function() {
            if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                let temperature = reponse.main.temp;
                let ville       = reponse.name;
                document.querySelector('#temperature_label').textContent = temperature;
                document.querySelector('#ville').textContent = ville;
            }
            else {
                alert('Un problème est intervenu, merci de revenir plus tard.');
            }
            }
        }
            }, erreur, options);
        } else {
            villeChoisie = 'Paris';
            recevoirTemperature(villeChoisie);
        }

        var options = {
            enableHighAccuracy: true
        }

        let changerDeVille = document.querySelector('#changer');
        changerDeVille.addEventListener('click', () => {
        villeChoisie = prompt('Quelle ville souhaitez-vous voir ?');
        recevoirTemperature(villeChoisie);
        });

        function erreur(){
            villeChoisie = "Paris";
            recevoirTemperature(villeChoisie);
        }

function recevoirTemperature(ville) {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=06c3c58ff8d070aa2d64fdfb20af20ad&units=metric';

  let requete = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
  requete.open('GET', url); // Nous récupérons juste des données
  requete.responseType = 'json'; // Nous attendons du JSON
  requete.send(); // Nous envoyons notre requête

  // Dès qu'on reçoit une réponse, cette fonction est executée
  requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        // console.log(reponse);
        let temperature = reponse.main.temp;
        let ville       = reponse.name;
        // console.log(temperature);
        document.querySelector('#temperature_label').textContent = temperature;
        document.querySelector('#ville').textContent = ville;
      }
      else {
        alert('Un problème est intervenu, merci de revenir plus tard.');
      }
    }
  }
}