var ModifierAchatVue = (function() {
    pageModifierAchat = document.getElementById("page-modifier-achat").innerHTML;

    return function(actionModifierAchat, idAchat) {

        this.afficher = function(achat) {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = pageModifierAchat;

            document.getElementById("achat-nom").value = achat.nom;
            document.getElementById("achat-montant").value = achat.montant;
            document.getElementById("achat-acheteur").value = achat.acheteur;

            var formulaireModifier = document.getElementById("formulaire-modifier");
            formulaireModifier.addEventListener("submit", modifier);
        };

        var modifier = function(evenement) {

            evenement.preventDefault();

            var nom = document.getElementById("achat-nom").value;
            var marque = document.getElementById("achat-montant").value;
            var acheteur = document.getElementById("achat-acheteur").value;

            var achat = new Achat(nom, marque, acheteur, idAchat);

            actionModifierAchat(achat);
        }
    }
})();
