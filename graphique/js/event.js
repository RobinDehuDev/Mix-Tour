/**
 * Created by antoine on 09/12/14.
 */
$( document ).ready(function() {
    var tempMovePile = 0;
    var board;
    var ligneDepart;
    var colonneDepart;
    var nbPions;
    var deplacement = false;

    //test tableau case
    /*var board = new Array(5);
    for(var ligne=0; ligne<board.length;ligne++){
        board[ligne] = new Array(5);

        for(var colonne=0; colonne<board[ligne].length;colonne++){
            board[ligne][colonne] = 0;
        }
    }

    //test
    board[0][0] = 0;
    board[0][1] = 12;
    board[0][2] = 121;
    board[0][3] = 0;
    board[0][4] = 1;

    board[1][0] = 22;
    board[1][1] = 111;
    board[1][2] = 1222;
    board[1][3] = 2;
    board[1][4] = 0;

    board[2][0] = 0;
    board[2][1] = 0;
    board[2][2] = 1;
    board[2][3] = 21;
    board[2][4] = 0;

    board[3][0] = 0;
    board[3][1] = 0;
    board[3][2] = 0;
    board[3][3] = 1;
    board[3][4] = 0;

    board[4][0] = 0;
    board[4][1] = 0;
    board[4][2] = 0;
    board[4][3] = 0;
    board[4][4] = 0;*/

    var motor = new moteur();
    motor.init_plateau();
    //motor.tab[2] = 1212;
    //motor.tab[24] = 22;
    console.log(motor.tab);

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

        //motor.tab[motor.get_pos(colonne, ligne)] = motor.Jcourant;
        if(deplacement === false){
            if(motor.tab[motor.get_pos(colonne,ligne)] === 0){
                motor.place_marble(colonne,ligne);
                display_pions_plateau(motor);
                console.log(motor.tab);
                motor.changetour();
            }else{
                //Initialisation du déplacement
                nbPions = prompt("Combien de pions voulez-vous déplacer ?","0");
                // this.deplacer_tour = function(nombre_pions, colonne_depart, ligne_depart, colonne_arrivee, ligne_arrivee)
                ligneDepart = ligne;
                colonneDepart = colonne;
                deplacement = true;
                
                    console.log(motor.tab);

                console.log(deplacement);
            }
        }else{
            //motor.deplacer_tour(nbPions,colonneDepart,ligneDepart,colonne,ligne);
            console.log("Nombre pions : " + nbPions);
            console.log("Colonne départ : " + colonneDepart);
            console.log("Ligne départ : " + ligneDepart);
            console.log("Colonne arrivé : " + colonne);
            console.log("Ligne arrivé : " + ligne);
            display_pions_plateau(motor);
            deplacement = false;
        }







        /*movePile(ligne,colonne);

        if(tempMovePile !== 0){
            if(board[ligne][colonne] === 0){
                board[ligne][colonne] = tempMovePile;

            }else{
                board[ligne][colonne] = parseInt(String(tempMovePile) + String(board[ligne][colonne]));
            }
            console.log(tempMovePile);
            tempMovePile = 0;
        }*/



        /*if(Jcourant == "b"){

            $(this).html('<div class="circleBlue"></div>');
            Jcourant = "r";
        }else{
            //$(this).html('<div class="circleRed"></div>');
            Jcourant = "b";
        }*/


    });

/*
* Evenement au chargement de la page du plateau
*/
    $(window).load(function(){

        display_pions_plateau(motor);
        //movePile(1,2);
        //convertTabMotor();
        //console.log(board);

    });

    var nbChiffre = function(number){
        var ret = 1;
        while(number >= 10){
            ret += 1;
            number = Math.floor(number / 10);
        }

        return ret;
    };

    var movePile = function(ligne, colonne){

        if(board[ligne][colonne] !== 0){
            var nbPions = prompt("Combien de pions voulez-vous déplacer ?","0");
            var lengthValue = nbChiffre(board[ligne][colonne]);

            var result = lengthValue - nbPions;
            var diviseValue = board[ligne][colonne];
            var charvalue = "";

            for(var i=0;i<result;i++){
                //charvalue = parseInt(String(charvalue) + String(diviseValue % 10));
                charvalue = String(diviseValue % 10) + charvalue;
                diviseValue = Math.floor(diviseValue/ 10);

            }

            tempMovePile = diviseValue;

            board[ligne][colonne] = parseInt(charvalue);
            console.log("pion restant" + board[ligne][colonne]);
            //console.log(charvalue);
        }
    };

    var convertTabMotor = function(){
        board = new Array(5);

        for(var ligne=0;ligne<board.length;ligne++){
            board[ligne] = new Array(5);
            for(var colonne=0;colonne<board[ligne].length;colonne++){
                motor.get_pos(colonne,ligne);
            }
        }
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
                $('#' + id).append('<div class="circleBlue" style="margin-top: -15px;"></div></td>');
            }else{
                $('#' + id).append('<div class="circleBlue" style="width: ' + sizeCircle + 'px; height: ' + sizeCircle + 'px; margin-top:' + String(-1 * sizeCircle - 5)  + 'px;"></div>');
            }

        }else{
            if(nbPion === 0){
                $('#' + id).append('<div class="circleRed" style="margin-top: -15px;"></div></td>');
            }else{
                $('#' + id).append('<div class="circleRed" style="width: ' + sizeCircle + 'px; height: ' + sizeCircle + 'px; margin-top:' + String(-1 * sizeCircle - 5)  + 'px;"></div>');
            }
        }
    };
});
