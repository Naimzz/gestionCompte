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
      var montant = document.getElementById("achat-montant").value;
      var acheteur = document.getElementById("achat-acheteur").value;

      var achat = new Achat(nom, montant, acheteur, null);

      actionEnregistrerAchat(achat);
    }
  }
})();
