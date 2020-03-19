var startMessage = "Votre genre : ",
  endMessage,
  adult = confirm("Êtes-vous une fille ?");
endMessage = adult ? "Fille" : "Garçon";
alert(startMessage + endMessage);
