function byTwo() {
  var result = parseInt(prompt("Donnez le nombre à multiplier par 2 :"));
  alert(result * 2);
}
byTwo(); // On appelle la fonction créée
alert('message intermediaire'); // Puis un message intermédiaire
byTwo(); // Et appelle de nouveau la fonction
