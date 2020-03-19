var age = parseInt(prompt("Votre âge :"));
if (age >= 1 && age <= 6) {
    alert("Vous êtes un jeune enfant.")
} else if (age >=7 && age <=11){
    alert("Vous êtes un enfant qui a atteint l'âge de raison.")
} else if ( age >=12 && age <=17){
    alert("Vous êtes un adolescent.")
} else if ( age>=18 && age<=120){
    alert("Vous êtes un adulte.")
} else {
    alert("âge incorrect")
}