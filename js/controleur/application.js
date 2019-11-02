(function() {

  var initialiser = function() {
    window.addEventListener("hashchange", naviguer);
    achatDAO = new AchatDAO();
    naviguer();
  };

  var naviguer = function() {

    var hash = window.location.hash;

    if (!hash) {

      var listeAchatDonnee = achatDAO.lister();
      var listeAchatVue = new ListeAchatVue(listeAchatDonnee);
      listeAchatVue.afficher();
    } else if (hash.match(/^#ajouter-achat/)) {

      var ajouterAchatVue = new AjouterAchatVue(actionAjouterAchat);
      ajouterAchatVue.afficher();
    } else if (hash.match(/^#modifier-achat\/([0-9]+)/)) {

      var naviguation = hash.match(/^#modifier-achat\/([0-9]+)/);
      var idAchat = naviguation[1];

      var listeAchatDonnee = achatDAO.lister();
      var modifierAchatVue = new ModifierAchatVue(actionModifierAchat, idAchat);
      modifierAchatVue.afficher(listeAchatDonnee[idAchat]);
    } else {

      var listeAchatDonnee = achatDAO.lister();
      var naviguation = hash.match(/^#achat\/([0-9]+)/);
      var idAchat = naviguation[1];

      var achatVue = new AchatVue(listeAchatDonnee[idAchat]);
      achatVue.afficher();
    }

    //var ajouterAchatVue = new AjouterAchatVue(actionEnregistrerAchat);
    //ajouterAchatVue.afficher();
  }

  var actionAjouterAchat = function(achat) {
    achatDAO.ajouter(achat);
    window.location.hash = "#";
  };

  var actionModifierAchat = function(achat) {
    achatDAO.modifier(achat);
    window.location.hash = "#";
  };

  initialiser();

})();