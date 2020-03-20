var prenoms = [];
var prenom;
while (prenom = prompt("Saisir un prénom")) {
    prenoms.push(prenom)
}
if (prenoms.length > 0) {
    alert(prenoms.join(" "));
    } else {
        alert("erreur : aucun prénom")
    }