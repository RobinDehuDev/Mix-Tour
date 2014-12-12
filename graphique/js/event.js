/**
 * Created by Antoine LECOUSTRE on 09/12/14.
 */
$( document ).ready(function() {
    var tempMovePile = 0;
    var board;
    var ligneDepart;
    var colonneDepart;
    var nbPions;
    var deplacement = false;
    var tempIdDivDeplacement;
    var id_plateau = 1;

    var motor = new moteur();

    var reponse;
    $('#player1').click(function() {
        var joueur1=1;
        reponse = prompt("Quel est votre nom Joueur 1?");
        alert (reponse);
    });
    $('#player2').click(function() {
        var joueur2=2;
        reponse = prompt("Quel est votre nom Joueur 2?");
        alert (reponse);
    });


    $("td").click(function() {
        var idDiv = $(this).attr("id");

        var ligne = parseInt(idDiv.substring(0,1));
        var colonne = parseInt(idDiv.substring(1,2));

        //Verification si l'on est en mode "placer pion" (pas déplacement)
        if(deplacement === false){
            if(motor.tab[motor.get_pos(colonne,ligne)] === 0){
                //Ajout d'un jeton dans une case vide
                motor.place_marble(colonne,ligne);
                display_pions_plateau(motor);
                motor.changetour();
                save_bdd(id_plateau,motor.tab, motor.J1, motor.J2, motor.nbpj1, motor.nbpj2, motor.lastcoup, motor.Jcourant);

            }else{
                //Initialisation du déplacement
                nbPions = parseInt(prompt("Combien de pions voulez-vous déplacer ?","1"));
                ligneDepart = ligne;
                colonneDepart = colonne;
                deplacement = true;
                tempIdDivDeplacement = $(this).attr("id");
                $(this).css('background-color', 'yellow');
            }
        }else{
            //Execution du déplacement
            motor.deplacer_tour(nbPions,colonneDepart,ligneDepart,colonne,ligne);
            $('#' + tempIdDivDeplacement).css('background-color', 'lightblue');
            display_pions_plateau(motor);
            save_bdd(id_plateau,motor.tab, motor.J1, motor.J2, motor.nbpj1, motor.nbpj2, motor.lastcoup, motor.Jcourant);
            deplacement = false;
        }





    });

/*
* Evenement au chargement de la page du plateau
*/
    $(window).load(function(){

        $.ajax({
            dataType: "json",
            type: "POST",
            url: "data.php",
            data: "idplateau=" + id_plateau,
            success: function(data){

                var plateau = data['etat_plateau'];
                var points_J1 = parseInt(data['points_J1']);
                var points_J2 = parseInt(data['points_J2']);
                var pions_j1 = parseInt(data['pions_J1']);
                var pions_j2 = parseInt(data['pions_J2']);
                var last = parseInt(data['derniercoup']);
                var courant = parseInt(data['courant']);

                var tabPlateau = plateau.split(" ");
                var tabPlateauInt = new Array(25);

                for(var i=0;i<tabPlateauInt.length;i++){
                    tabPlateauInt[i] = parseInt(tabPlateau[i]);
                }

                motor.init_plateau2(tabPlateauInt, points_J1, points_J2, courant, last, pions_j1,pions_j2);
                display_pions_plateau(motor);
            }
        });

    });

    //Raffraichissement du platerau toutes les 5 secondes
    setTimeout(function(){
        $.ajax({
            dataType: "json",
            type: "POST",
            url: "data.php",
            data: "idplateau=" + id_plateau,
            success: function(data){

                var plateau = data['etat_plateau'];
                var points_J1 = parseInt(data['points_J1']);
                var points_J2 = parseInt(data['points_J2']);
                var pions_j1 = parseInt(data['pions_J1']);
                var pions_j2 = parseInt(data['pions_J2']);
                var last = parseInt(data['derniercoup']);
                var courant = parseInt(data['courant']);

                var tabPlateau = plateau.split(" ");
                var tabPlateauInt = new Array(25);


                for(var i=0;i<tabPlateauInt.length;i++){
                    tabPlateauInt[i] = parseInt(tabPlateau[i]);
                }

                motor.init_plateau2(tabPlateauInt, points_J1, points_J2, courant, last, pions_j1,pions_j2);
                display_pions_plateau(motor);
            }
        });
    }, 5000);

    

    var save_bdd = function(id,plateau,points_J1,points_J2,pions_J1,pions_J2,last, jcourant){
        var chainePlateau = "";

        for(var i=0;i<plateau.length;i++){
            chainePlateau += plateau[i] + " ";
        }

        $.ajax({
            url: "save_data_partie.php",
            type: "POST",
            data: "id=" + id + "&plateau=" + chainePlateau + "&points_J1=" + points_J1 + "&points_J2=" + points_J2 + "&pions_J1=" + pions_J1 + "&pions_J2=" + pions_J2 + "&last=" + last + "&courant=" + jcourant,
            success: function(data){
            }
        });
    };


/*
* Affichage des pions sur le plateau a partir du tableau du moteur
*/
    var display_pions_plateau = function(m){
        //initialisation à vide
        for(ligne=0;ligne<5;ligne++){
            for(colonne=0;colonne<5;colonne++){
                var id = String(ligne) +  String(colonne);
                $("#" + id).html("");
            }
        }

        for(ligne=0;ligne<5;ligne++){
            for(colonne=0;colonne<5;colonne++){
                var sizeCircle = 85;
                var valCase = m.tab[m.get_pos(colonne, ligne)];
                var numberPion;
                var nbPion = 0;
                while(valCase != 0){
                    numberPion = valCase % 10;

                    //Création des cercles
                    resizeCircle(String(ligne) +  String(colonne), nbPion, numberPion, sizeCircle);

                    sizeCircle = sizeCircle - 20;

                    valCase = Math.floor(valCase / 10);
                    nbPion++;
                }
            }
        }
    };

    var resizeCircle = function(id, nbPion, valuePion, sizeCircle){

        if(valuePion === 1){
            if(nbPion === 0){
                $('#' + id).append('<div class="circleBlue" style="margin-top: auto;"></div></td>');
            }else{
                $('#' + id).append('<div class="circleBlue" style="width: ' + sizeCircle + 'px; height: ' + sizeCircle + 'px; margin-top:' + String(-1 * sizeCircle)  + 'px;"></div>');
            }

        }else{
            if(nbPion === 0){
                $('#' + id).append('<div class="circleRed" style="margin-top: auto;"></div></td>');
            }else{
                $('#' + id).append('<div class="circleRed" style="width: ' + sizeCircle + 'px; height: ' + sizeCircle + 'px; margin-top:' + String(-1 * sizeCircle)  + 'px;"></div>');
            }
        }
    };
});
