// const motApplication = "Bonjour"
// let motUtilisateur = prompt("Entrez le mot : " + motApplication)

// if (motUtilisateur === motApplication) {
//     console.log("Bravo !")
// } else {
//     if (motUtilisateur === "Gredin") {
//         console.log("Restez correct !")
//     } else {
//         if (motUtilisateur === "Mécréant") {
//             console.log("Restez correct !")
//         } else {
//             if (motUtilisateur === "Vilain") {
//                 console.log("Soyez gentil !")
//             } else {
//                 console.log("Vous avez fait une erreur de frappe.")
//             }
//         }
//     }
// }

// switch (motUtilisateur) {
//     case motApplication:
//         console.log("Bravo !")
//         break
//     case "Gredin":
//         console.log("Restez correct !")
//         break
//     case "Mécréant":
//         console.log("Restez correct !")
//         break
//     case "Vilain":
//         console.log("Soyez gentil !")
//         break
//     default:
//         console.log("Vous avez fait une erreur de frappe.")
// }

// const listeMots = ["Cachalot", "Pétunia", "Serviette"]
// let score = 0

// let motUtilisateur = prompt("Entrez le mot : " + listeMots[0])

// if ( motUtilisateur === listeMots[0] ) {
//     score++
// }

// console.log(score)

// motUtilisateur = prompt("Entrez le mot : " + listeMots[1])

// if ( motUtilisateur === listeMots[1] ) {
//     score++
// }

// console.log(score)

// motUtilisateur = prompt("Entrez le mot : " + listeMots[2])

// if ( motUtilisateur === listeMots[2] ) {
//     score++
// }

// console.log(score)

// BOUCLE FOR
//  for(compteur=0 ; compteur<3 ; compteur++) {
//     console.log(compteur)
// }

// BOUCLE WHILE
// i=0
// while(i<3) {
//     console.log(i)
//     i++
// }

// let score = 0

// let choixListeUtilisateur = prompt("Écrivez le nom de la liste que vous souhaitez: Mots ou Phrases?")

// if (choixListeUtilisateur === "Mots") {

// for (let i=0 ; i < listeMots.length ; i++ ) {
//     let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
//     if (motUtilisateur === listeMots[i]){
//         score ++
//     }
//     }

//     console.log("Votre score est de " + score + " sur " + listeMots.length)
// }

// else if(choixListeUtilisateur === "Phrases")
//     {
//         for (let i=0 ; i < listePhrases.length ; i++ ) {
//             let motUtilisateur = prompt("Entrez le mot : " + listePhrases[i])
//             if (motUtilisateur === listePhrases[i]){
//                 score ++
//             }
//             }

//             console.log("Votre score est de " + score + " sur " + listeMots.length)
//         } else{console.log("Choix incorrect")}

function afficherResultat(score, nbMotsProposes) {
  console.log("Votre score est de " + score + " sur " + nbMotsProposes);
}

function choisirPhrasesOuMots() {
  let choixListeUtilisateur = prompt(
    'Voulez-vous jouer avec les mots (entrez "mots") ou les phrases (entrez "phrases") ?'
  );
  while (
    choixListeUtilisateur !== "mots" &&
    choixListeUtilisateur !== "phrases"
  ) {
    choixListeUtilisateur = prompt(
      'Vous devez choisir entre "mots" et "phrases"'
    );
  }
  return choixListeUtilisateur;
}

function lancerBoucleDeJeu(listePropositions) {
  let score = 0;
  for (let i = 0; i < listePropositions.length; i++) {
    let motUtilisateur = prompt("Entrez le mot : " + listePropositions[i]);
    if (motUtilisateur === listePropositions[i]) {
      score++;
    }
  }
  return score;
}

function lancerJeu() {
  let choixListeUtilisateur = choisirPhrasesOuMots();
  let score = 0;
  let nbMotsProposes = 0;

  if (choixListeUtilisateur === "mots") {
    score = lancerBoucleDeJeu(listeMots);
    nbMotsProposes = listeMots.length;
  } else {
    score = lancerBoucleDeJeu(listePhrases);
    nbMotsProposes = listePhrases.length;
  }
  afficherResultat(score, nbMotsProposes);
}
