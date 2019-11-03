var UtilisateurDAO = function () {

    var listeUtilisateur = null;
    var initialiser = function () {
        if (!listeUtilisateur) {
            listeUtilisateur = [];
        }
    };

    this.lister = function() {
        if (localStorage['utilisateur']) {
            listeUtilisateur = JSON.parse(localStorage['utilisateur']);
        }

        for (position in listeUtilisateur) {
            var utilisateur = new Utilisateur(
                listeUtilisateur[position].prenom,
                listeUtilisateur[position].id);
            listeUtilisateur[position] = utilisateur;
        }
        return listeUtilisateur;
    };

    this.ajouter = function(utilisateur) {

        if (listeUtilisateur.length > 0) {
            utilisateur.id = listeUtilisateur[listeUtilisateur.length - 1].id + 1;
            console.log(utilisateur.prenom);
        }
        else {
            utilisateur.id = 0;
        }

        listeUtilisateur[utilisateur.id] = utilisateur;
        localStorage['utilisateur'] = JSON.stringify(listeUtilisateur);
    };

    this.modifier = function(utilisateur) {

        listeUtilisateur[utilisateur.id] = utilisateur;
        localStorage['utilisateur'] = JSON.stringify(listeUtilisateur);
    };

    initialiser();
};