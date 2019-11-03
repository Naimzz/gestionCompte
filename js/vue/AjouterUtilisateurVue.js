var AjouterUtilisateurVue = (function() {
    pageAjouterUtilisateur = document.getElementById("page-ajouter-utilisateur").innerHTML;

    return function(actionEnregistrerUtilisateur) {

        this.afficher = function() {
            elementBody = document.getElementsByTagName("body")[0] ;
            elementBody.innerHTML = pageAjouterUtilisateur;

            var formulaireAjouter = document.getElementById("formulaire-ajouter");
            formulaireAjouter.addEventListener("submit", enregistrer);
        };

        var enregistrer = function(evenement) {

            evenement.preventDefault();

            var prenom = document.getElementById("utilisateur-prenom").value;

            var utilisateur = new Utilisateur(prenom, null);

            actionEnregistrerUtilisateur(utilisateur);
        }
    }
})();
