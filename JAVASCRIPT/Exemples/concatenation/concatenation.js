var hi = "Bonjour ",
  name = "toi",
  result;
result = hi + name;
alert(result); // Affiche : « Bonjour toi »

//ou
var text = "Bonjour ";
text += "toi";
alert(text); // Affiche « Bonjour toi ».

//convertir un nombre en string
var text,
  number1 = 4,
  number2 = 2;
text = number1 + "" + number2;
/* on ajoute une chaîne de caractères vide entre les deux nombres 
pour permettre une concaténation sans calcul */ alert(
  text
); // Affiche : « 42 »

