var ListeUtilisateurVue = (function() {
    pageListeUtilisateur = document.getElementById("page-liste-utilisateur").innerHTML;

    return function(listeUtilisateurDonnee) {
        this.afficher = function() {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = pageListeUtilisateur;

            var listeUtilisateur = document.getElementById('liste-utilisateur');

            var textLi = "";

            for (var numeroUtilisateur in listeUtilisateurDonnee) {
                textLi += '<li class="collection-item"><a href="#utilisateur/' + listeUtilisateurDonnee[numeroUtilisateur].id + '"><div>' +
                    listeUtilisateurDonnee[numeroUtilisateur].prenom + "</a>" + '&nbsp;&nbsp;<a class="secondary-content" href="#modifier-utilisateur/' + listeUtilisateurDonnee[numeroUtilisateur].id + '"><i class="material-icons">edit</i>' +
                    "</a></li>";
            }
            listeUtilisateur.innerHTML = textLi;
        }
    }
})();
