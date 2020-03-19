function myFunction(arg) {
  // Notre argument est la variable « arg »
  alert("Votre argument : " + arg);
}
myFunction("En voilà un beau test !");

//ou

function myFunction(arg) {
  alert("Votre argument : " + arg);
}
myFunction(prompt("Que souhaitez-vous passer en argument à la fonction ?"));

//multi arg

function moar(first, second) {
  // On peut maintenant utiliser les variables « first » et « second » comme on le souhaite :
  alert("Votre premier argument : " + first);
  alert("Votre deuxième argument : " + second);
}
moar(
  prompt("Entrez votre premier argument :"),
  prompt("Entrez votre deuxième argument :")
);
