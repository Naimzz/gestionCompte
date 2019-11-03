var SuprimmerUtilisateurVue = (function() {
    pageSuprimmerUtilisateur = document.getElementById("page-suprimmer-utilisateur").innerHTML;

    return function(actionEnregistrerUtilisateur, idUtilisateur) {

        this.afficher = function() {
            elementBody = document.getElementsByTagName("body")[0] ;
            elementBody.innerHTML = pageSuprimmerUtilisateur;

            var formulaireSuprimmer = document.getElementById("formulaire-suprimmer");
            formulaireSuprimmer.addEventListener("submit", suprimmer);
        };

        var suprimmer = function(evenement) {

            evenement.preventDefault();

            var utilisateur = new Utilisateur(null, idUtilisateur);

            actionEnregistrerUtilisateur(utilisateur);
        }
    }
})();
