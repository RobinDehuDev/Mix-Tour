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
        var pos = this.get_pos(column, line);
        var r = 0;
        if (this.tab[pos] = 0) {
            this.tab[pos] = Jcourant;
            r = 1;
        }
        return r;
    };


    this.distance_cases = function (colonne_depart, ligne_depart, colonne_arrivee, ligne_arrivee) {

        if(colonne_arrivee != colonne_depart && ligne_arrivee != ligne_depart)
        {
            if((colonne_arrivee >= colonne_depart) && (ligne_arrivee >= ligne_depart))
            {
                if ((colonne_arrivee - colonne_depart) != (ligne_arrivee - ligne_depart))
                {
                    System.out.println("impossible de calculer la distance gros Bêtah");
                    return 0;
                }
            }
            if((colonne_arrivee >= colonne_depart) && (ligne_arrivee < ligne_depart))
            {
                if ((colonne_arrivee - colonne_depart) != (ligne_depart - ligne_arrivee))
                {
                    System.out.println("impossible de calculer la distance gros Bêtah");
                    return 0;
                }
            }
            if((colonne_arrivee < colonne_depart) && (ligne_arrivee >= ligne_depart))
            {
                if ((colonne_depart - colonne_arrivee) != (ligne_arrivee - ligne_depart))
                {
                    System.out.println("impossible de calculer la distance gros Bêtah");
                    return 0;
                }
            }
            if((colonne_arrivee < colonne_depart) && (ligne_arrivee < ligne_depart))
            {
                if ((colonne_depart - colonne_arrivee) != (ligne_depart - ligne_arrivee))
                {
                    System.out.println("impossible de calculer la distance gros Bêtah");
                    return 0;
                }
            }
        }

        if (colonne_arrivee > colonne_depart)
            return (colonne_arrivee - colonne_depart);
        else if(colonne_depart == colonne_arrivee)
        {
            if(ligne_arrivee >= ligne_depart)
            {
                return(ligne_arrivee - ligne_depart);
            }
            else
            {
                return(ligne_depart - ligne_arrivee);
            }
        }
        else
        {
            return (colonne_depart - colonne_arrivee);
        }
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

    this.deplacer_tour(nombre_pions, colonne_depart, ligne_depart, colonne_arrivee, ligne_arrivee)
    {
        if(this.coup_possible(nombre_pions, colonne_depart, ligne_depart, colonne_arrivee, ligne_arrivee))
        {
            var longueur = this.tab[this.get_pos(colonne_depart, ligne_depart)].length;
            var pions_a_deplacer = parseInt(this.tab[this.get_pos(colonne_depart, ligne_depart)].toString().substr(0,nombre_pions));

            this.tab[this.get_pos(colonne_arrivee, ligne_arrivee)] = this.tab[this.get_pos(colonne_depart, ligne_depart)].toString().substr(0,nombre_pions-1) + this.tab[this.get_pos(colonne_arrivee, ligne_arrivee)]; // on ajoute sur la case finale

            this.tab[this.get_pos(colonne_depart, ligne_depart)] = parseInt(this.tab[this.get_pos(colonne_depart, ligne_depart)].toSring().substr(longueur - (nombre_pions - 1), longueur)); // on enlève sur la case de départ

            if( (this.tab[this.get_pos(colonne_arrivee, ligne_arrivee)].length) >= 5 ) // si la pile d'arrivée est plus grande que 5
            {
                for(var i = 0; i < this.tab[this.get_pos(colonne_arrivee, ligne_arrivee)].length; i++) // pour tous les pions de la pile
                {
                    if(this.tab[this.get_pos(colonne_arrivee, ligne_arrivee)].toString().charAt(i) == 1) // si le pion est un pion 1
                    {
                        this.nbpj1 ++; // on incrémente le nombre de pions 1
                    }
                    if(this.tab[this.get_pos(colonne_arrivee, ligne_arrivee)].toString().charAt(i) == 2) // si le pion est un pion 2
                    {
                        this.nbpj2 ++; // on incrémente le nombre de pions 2
                    }

                    var dernier_pion = parseInt(this.tab[this.get_pos(colonne_arrivee, ligne_arrivee)].toString().charAt(i));
                }

                if(dernier_pion == 1) // augmentation du score de J1 ou J2
                {
                    this.J1 ++;
                }
                if(dernier_pion == 2)
                {
                    this.J2 ++;
                }

                this.tab[this.get_pos(colonne_arrivee, ligne_arrivee)] = 0; // on enlève la pile du jeu
            }
        }
    }
};
