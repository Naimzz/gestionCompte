var ListeUtilisateurVue = (function() {
    pageListeUtilisateur = document.getElementById("page-liste-utilisateur").innerHTML;

    return function(listeUtilisateurDonnee) {
        this.afficher = function() {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = pageListeUtilisateur;

            var listeUtilisateur = document.getElementById('liste-utilisateur');

            var textLi = "";

            for (var numeroUtilisateur in listeUtilisateurDonnee) {
                textLi += '<li class="collection-item"><div>' +
                    listeUtilisateurDonnee[numeroUtilisateur].prenom + '&nbsp;&nbsp;<div class="secondary-content"><i class="material-icons">edit</i></div></li>';
            }
            listeUtilisateur.innerHTML = textLi;
        }
    }
})();
