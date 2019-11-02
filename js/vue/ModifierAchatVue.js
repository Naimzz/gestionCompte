var ModifierAchatVue = (function() {
    pageModifierAchat = document.getElementById("page-modifier-achat").innerHTML;

    return function(actionModifierAchat, idAchat) {

        this.afficher = function(achat) {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = pageModifierAchat;

            document.getElementById("achat-nom").value = achat.nom;
            document.getElementById("achat-developpeur").value = achat.developpeur;
            document.getElementById("achat-description").value = achat.description;

            var formulaireModifier = document.getElementById("formulaire-modifier");
            formulaireModifier.addEventListener("submit", modifier);
        };

        var modifier = function(evenement) {

            evenement.preventDefault();

            var nom = document.getElementById("achat-nom").value;
            var marque = document.getElementById("achat-developpeur").value;
            var description = document.getElementById("achat-description").value;

            var achat = new Achat(nom, marque, description, idAchat);

            actionModifierAchat(achat);
        }
    }
})();
