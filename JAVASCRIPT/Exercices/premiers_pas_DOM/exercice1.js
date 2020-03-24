function centrage_h1() {
    titre = document.getElementsByTagName("h1")[0];
    titre.setAttribute("align", "center");
  }

  function modif_paragraphe() {
    par = document.getElementsByTagName("p")[0];
    par.innerHTML = "Premier paragraphe modifié.";
  }

let clicTitreModif = document.getElementsByTagName("h1")[0];
clicTitreModif.addEventListener('click', modif_paragraphe);

let centrageTitre = document.getElementById("premier");
centrageTitre.addEventListener('click', centrage_h1);

