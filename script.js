/**
 * Fichier JavaScript pour l'application PokeCount.
 * @author Aedan Bélet <aedan.belet@divtec.ch>
 * @version 0.1 (Version actuelle)
 * @since 2024-01-31 (Date de création)
 */

"use strict"; // Interprètation stricte du code

let compteur = 0;
const compteurEl = document.getElementById("compteur-el");

function capturer() {
    compteur += 1; // Incrémenter le compteur de 1
    compteurEl.textContent = compteur; // Mettre à jour le texte de l'élément <h2>
    if (compteur < 5) {
        compteurEl.style.color = "green"; // Couleur verte pour moins de 5 captures
    } else if (compteur < 10) {
        compteurEl.style.color = "yellow"; // Couleur jaune pour 5 à 9 captures
    } else {
        compteurEl.style.color = "red"; // Couleur rouge pour 10 captures ou plus
    }
}

const sauvegardeEl = document.getElementById("sauvegarde-el");

function sauvegarder() {
    let compteurStr = "<li>" + compteur + " Pokémons</li>";
    sauvegardeEl.innerHTML += compteurStr; // Ajouter la valeur actuelle du compteur
    localStorage.setItem("captures", sauvegardeEl.innerHTML); // Sauvegarder les captures dans le localStorage
    compteur = 0;
    compteurEl.textContent = compteur;
}

function reset() {
    compteur = 0;
    compteurEl.textContent = compteur;
    sauvegardeEl.innerHTML = "";
    localStorage.removeItem("captures");
    mettreAJourCouleurCompteur();
}
document.getElementById("reset-btn").style.backgroundColor = "white";
document.getElementById("reset-btn").style.color = "black";

const capturerBtn = document.getElementById("capturer-btn");
const sauvegarderBtn = document.getElementById("sauvegarder-btn");
const resetBtn = document.getElementById("reset-btn");
capturerBtn.addEventListener("click", capturer);
sauvegarderBtn.addEventListener("click", sauvegarder);
resetBtn.addEventListener("click", reset);

window.addEventListener("load", () => { // Attendre que la page soit chargée pour exécuter le code
    sauvegardeEl.innerHTML = localStorage.getItem("captures") || ""; // Charger les captures sauvegardées ou une chaîne vide
});

