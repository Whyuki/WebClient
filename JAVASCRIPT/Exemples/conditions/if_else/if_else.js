//if

if (confirm("Voulez-vous exécuter le code Javascript de cette page ?")) {
  alert("Le code a bien été exécuté !");
}

// if else

if (
  confirm(
    'Pour accéder à ce site vous devez être une fille, cliquez sur "OK" si c\'est le cas.'
  )
) {
  alert("Vous allez être redirigé vers le site.");
} else {
  alert("Désolé, vous n'avez pas accès à ce site.");
}

//conditions intermédiaires
var floor = parseInt(
  prompt("Entrez l'étage où l'ascenseur doit se rendre (de -2 à 30) :")
);
if (floor == 0) {
  alert("Vous vous trouvez déjà au rez-de-chaussée.");
} else if (-2 <= floor && floor <= 30) {
  alert("Direction l'étage n°" + floor + " !");
} else {
  alert("L'étage spécifié n'existe pas.");
}
