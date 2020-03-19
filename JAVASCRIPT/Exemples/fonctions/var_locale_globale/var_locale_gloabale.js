var message = "Ici la variable globale !";
function showMsg() {
  var message = "Ici la variable locale !";
  alert(message);
}
showMsg(); // On affiche la variable locale
alert(message); // Puis la variable globale
