//base
var userName = prompt("Entrez votre prénom :");
alert(userName); // Affiche le prénom entré par l'utilisateur

//message concatané
var start = "Bonjour ",
  name,
  end = " !",
  result;
name = prompt("Quel est votre prénom ?");
result = start + name + end;
alert(result);

//calcul
var first, second, result;
first = prompt("Entrez le premier chiffre :");
second = prompt("Entrez le second chiffre :");
result = parseInt(first) + parseInt(second);
/* la fonction parseInt() transforme la chaîne de caractères en nombre */ alert(
  result
);
