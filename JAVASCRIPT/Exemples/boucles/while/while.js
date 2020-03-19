var number = 1;
while (number < 10) {
  // alert(number);
  number++; // Tant que le nombre est inférieur à 10, on l'incrémente de 1
}
alert(number); // Affiche : « 10 »

// avec prompt et break

var prenoms = "",
  prenom; // On crée une variable prenoms pour mémoriser
while (true) {
  prenom = prompt("Entrez un prénom :"); // L'utilisateur entre chaque prenom
  if (prenom) {
    prenoms += prenom + " "; // Ajoute le nouveau prénom ainsi qu'une espace
  } else {
    break; // On quitte la boucle
  }
}
alert(prenoms); // Affiche les prénoms à la suite
