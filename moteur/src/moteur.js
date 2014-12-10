/**
 * Created by rdehu on 09/12/14.
 */
var moteur = function () {
    this.tab = new Array(25);
    this.J1;
    this.J2;
    this.Jcourant;
    this.lastcoup;
    this.nbpj1;
    this.nbpj2;

    this.init_plateau = function () {
        this.JCourant = 1;
        for (var i = 0; i < 25; i++) {
            this.tab[i] = 0;
        }
    };

    this.get_pos = function (column, line) {
        return 5 * line + column;
    };

    this.place_marble = function (column, line) {
        var pos = get_pos(column, line);
        var r = 0;
        if (this.tab[pos] = 0) {
            this.tab[pos] = Jcourant;
            r = 1;
        }
        return r;
    };


    this.distance_cases = function (colonne_depart, colonne_arrivee) {
        if (colonne_arrivee >= colonne_depart)
            return (colonne_arrivee - colonne_depart);
        else
            return (colonne_depart - colonne_arrivee);
    };

    this.ligne_droite = function (colonne_depart, ligne_depart, colonne_arrivee, ligne_arrivee) {
        if (colonne_arrivee == colonne_depart) {
            for (var i = ligne_depart + 1; i < ligne_arrivee; i++) {
                if (tab[get_pos(colonne_depart, i)] != 0) {
                    return false;
                }
            }
        }
        else if (ligne_arrivee == ligne_depart) {
            for (var i = colonne_depart + 1; i < colonne_arrivee; i++) {
                if (tab[get_pos(i, ligne_depart)] != 0) {
                    return false;
                }
            }
        }
        else {
            for (var i = colonne_depart + 1; i < colonne_arrivee; i++) {
                if (tab[get_pos(i, i)] != 0) {
                    return false;
                }
            }
        }
        return true;
    };



    this.get_tete_pile = function (column, line) {
        var position = this.get_pos(column, line);
        var chaine = this.tab[position].toString();
        return parseInt(chaine.substr(0, 1));
    };

    this.deplacer_pion = function () {

    };

    this.coup_possible = function (nombre_pions, colonne_depart, ligne_depart, colonne_arrivee, ligne_arrivee) {
        if (tab[get_pos(colonne_depart, ligne_depart)] != 0 && tab[get_pos(colonne_arrivee, ligne_arrivee)] != 0) {
            if (tab[get_pos(colonne_depart, ligne_depart)] != 0 && tab[get_pos(colonne_arrivee, ligne_arrivee)] != 0) // case de départ et d'arrivée non vide
            {
                if (ligne_droite(colonne_depart, ligne_depart, colonne_arrivee, ligne_arrivee)) // si rien n'obstrue la voie
                {
                    if (tab[get_pos(colonne_arrivee, ligne_arrivee)].length == distance_cases(colonne_depart, colonne_arrivee))  // si la distance = hauteur pile
                    {
                        if (nombre_pions.toString() != this.lastcoup.toString().charAt(0) || this.get_pos(colonne_arrivee, ligne_arrivee).toString() != this.lastcoup.toString().substring(1, 2) || this.get_pos(colonne_depart, ligne_depart).toString() != this.lastcoup.toString().substring(3, 4)) // coup différent de celui d'avant
                        {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    };
};
