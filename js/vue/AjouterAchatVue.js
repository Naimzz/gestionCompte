var AjouterAchatVue = (function() {
  pageAjouterAchat = document.getElementById("page-ajouter-achat").innerHTML;

  return function(actionEnregistrerAchat) {

    this.afficher = function() {
      elementBody = document.getElementsByTagName("body")[0] ;
      elementBody.innerHTML = pageAjouterAchat;

      var formulaireAjouter = document.getElementById("formulaire-ajouter");
      formulaireAjouter.addEventListener("submit", enregistrer);
    }

    var enregistrer = function(evenement) {

      evenement.preventDefault();

      var nom = document.getElementById("achat-nom").value;
      var developpeur = document.getElementById("achat-developpeur").value;
      var description = document.getElementById("achat-description").value;

      var achat = new Achat(nom, developpeur, description, null);

      actionEnregistrerAchat(achat);
    }
  }
})();
