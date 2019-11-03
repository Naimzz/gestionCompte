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
        }
        else {
            utilisateur.id = 0;
        }

        listeUtilisateur[listeUtilisateur.length] = utilisateur;
        localStorage['utilisateur'] = JSON.stringify(listeUtilisateur);
    };

    this.suprimmer = function(utilisateur) {

        for (let i = 0; i < listeUtilisateur.length; i++) {
            if (listeUtilisateur[i].id == utilisateur.id) {
                listeUtilisateur.splice(i, 1);
            }
        }

        localStorage['utilisateur'] = JSON.stringify(listeUtilisateur);
    };

    initialiser();
};