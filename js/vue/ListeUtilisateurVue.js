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
                    listeUtilisateurDonnee[numeroUtilisateur].prenom + '&nbsp;&nbsp;<a href="#suprimmer-utilisateur/' + listeUtilisateurDonnee[numeroUtilisateur].id + '" class="secondary-content"><i class="material-icons">edit</i></a></li>';
            }
            listeUtilisateur.innerHTML = textLi;
        }
    }
})();
