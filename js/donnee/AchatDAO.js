var AchatDAO = function () {

    /*
    var listeAchat = [
        new Achat("League Of Legend","Riot Games","5vs5 dans la faille de l'invocateur",0),
        new Achat("Overwatch","Blizzard","Fps en 6vs6 inspiré de l'univers Blizzard",1),
        new Achat("Rocket League","Psyonix","Achatx de foot avec des voitures",2)
    ];

    this.lister = function () {
        return listeAchat;
    };

    this.ajouter = function (achat) {
        achat.id = listeAchat.length;
        listeAchat.push(achat);
    };

     */

    var listeAchat = null;
    var initialiser = function () {
        if (!listeAchat) {
            listeAchat = [];
        }
    };

    this.lister = function() {
      if (localStorage['achat']) {
          listeAchat = JSON.parse(localStorage['achat']);
      }

      for (position in listeAchat) {
          var achat = new Achat(listeAchat[position].nom,
                            listeAchat[position].montant,
                            listeAchat[position].acheteur,
                            listeAchat[position].id);
          listeAchat[position] = achat;
      }
      return listeAchat;
    };

    this.ajouter = function(achat) {

        if (listeAchat.length > 0) {
            console.log("epepepep")
            achat.id = listeAchat[listeAchat.length - 1].id + 1;
            console.log(achat.id);
        }
        else {
            achat.id = 0;
        }

        listeAchat[achat.id] = achat;
        localStorage['achat'] = JSON.stringify(listeAchat);
    };

    this.modifier = function(achat) {

        listeAchat[achat.id] = achat;
        localStorage['achat'] = JSON.stringify(listeAchat);
    };

    initialiser();
};