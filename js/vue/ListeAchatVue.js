var ListeAchatVue = (function() {
  pageListeAchat = document.getElementById("page-liste-achat").innerHTML;

  return function(listeAchatDonnee) {
    this.afficher = function() {
      elementBody = document.getElementsByTagName("body")[0];
      elementBody.innerHTML = pageListeAchat;

      var listeAchat = document.getElementById('liste-achat');

      var textLi = "";

      for (var numeroAchat in listeAchatDonnee) {
        textLi += '<li class="collection-item"><a href="#achat/' + listeAchatDonnee[numeroAchat].id + '"><div>' +
          listeAchatDonnee[numeroAchat].montant + "€<br>" + listeAchatDonnee[numeroAchat].nom + "</a>" + '&nbsp;&nbsp;<a class="secondary-content" href="#modifier-achat/' + listeAchatDonnee[numeroAchat].id + '"><i class="material-icons">edit</i>' +
            "</a></li>";
      }
      listeAchat.innerHTML = textLi;
    }
  }
})();
