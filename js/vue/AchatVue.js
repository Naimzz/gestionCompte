var AchatVue = (function() {
  pageAchat = document.getElementById("page-achat").innerHTML;

  return function(achat) {
    this.afficher = function() {
      elementBody = document.getElementsByTagName("body")[0];
      elementBody.innerHTML = pageAchat;

      document.getElementById('achat-nom').innerHTML = achat.nom;
      document.getElementById('achat-montant').innerHTML = achat.montant;
      document.getElementById('achat-acheteur').innerHTML = achat.acheteur;
    }
  }
})();
