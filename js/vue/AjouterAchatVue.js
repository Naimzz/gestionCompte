var AjouterAchatVue = (function() {
  pageAjouterAchat = document.getElementById("page-ajouter-achat").innerHTML;

  return function(actionEnregistrerAchat, listeUtilisateurDonnee) {

    this.afficher = function() {
      elementBody = document.getElementsByTagName("body")[0] ;
      elementBody.innerHTML = pageAjouterAchat;

      var listeUtilisateur = document.getElementById('liste-utilisateur');

      var textSelect = "<option value=\"\" disabled selected>Choisissez l'acheteur</option>";

      var i = 0;

      for (var numeroUtilisateur in listeUtilisateurDonnee) {
        textSelect += '<option id="' + i + '" value="' + listeUtilisateurDonnee[numeroUtilisateur].prenom + '">' + listeUtilisateurDonnee[numeroUtilisateur].prenom + '</option>';
      }
      listeUtilisateur.innerHTML = textSelect;


      var formulaireAjouter = document.getElementById("formulaire-ajouter");
      formulaireAjouter.addEventListener("submit", enregistrer);
    };

    var enregistrer = function(evenement) {

      evenement.preventDefault();

      var nom = document.getElementById("achat-nom").value;
      var montant = document.getElementById("achat-montant").value;
      var acheteur = document.getElementById("liste-utilisateur");

      var lacheteur = acheteur.options[acheteur.selectedIndex].value;
      console.log(lacheteur);

      var achat = new Achat(nom, montant, lacheteur, null);

      actionEnregistrerAchat(achat);
    }
  }
})();
