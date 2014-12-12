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
    var id_plateau;

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
            }else{
                //Initialisation du déplacement
                nbPions = prompt("Combien de pions voulez-vous déplacer ?","1");
                ligneDepart = ligne;
                colonneDepart = colonne;
                deplacement = true;
                tempIdDivDeplacement = $(this).attr("id");
                $(this).css('background-color', 'yellow');
                console.log(motor.tab);
                console.log(deplacement);
            }
        }else{
            //Execution du déplacement
            motor.deplacer_tour(nbPions,colonneDepart,ligneDepart,colonne,ligne);
            $('#' + tempIdDivDeplacement).css('background-color', 'lightblue');
            console.log("Nombre pions : " + nbPions);
            console.log("Colonne départ : " + colonneDepart);
            console.log("Ligne départ : " + ligneDepart);
            console.log("Colonne arrivé : " + colonne);
            console.log("Ligne arrivé : " + ligne);
            display_pions_plateau(motor);
            console.log(motor.tab);
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

        /*motor.tab[motor.get_pos(0,2)]=112;
        motor.tab[motor.get_pos(3,4)]=1;
        //motor.place_marble(0,2);
        //motor.place_marble(0,2);
        console.log(motor.tab[motor.get_pos(0,2)]);
        console.log(motor.tab[motor.get_pos(3,4)]);
        motor.deplacer_tour(1,0,2,3,4);
        console.log(motor.tab[motor.get_pos(0,2)]);
        console.log(motor.tab[motor.get_pos(3,4)]);*/
        //motor.place_marble(3,3);
        //motor.place_marble(4,4);

        //var data;
        $.ajax({
            dataType: "json",
            url: "data.php",
            success: function(data){
                var plateau = data['plateau'];
                var points_J1 = data['points_J1'];
                var points_J2 = data['points_J2'];
                var pions_j1 = data['pions_j1'];
                var pions_j2 = data['pions_j2'];
                var last = data['last'];

                var tabPlateau = plateau.split(" ");
                var tabPlateauInt = new Array(25);

                for(var i=0;i<tabPlateauInt.length;i++){
                    tabPlateauInt[i] = parseInt(tabPlateau[i]);
                }

                motor.init_plateau(tabPlateauInt, points_J1, points_J2, 1, last, pions_j1,pions_j2);
                display_pions_plateau(motor);
                save_bdd(1,motor.tab, motor.J1, motor.J2, motor.nbpj1, motor.nbpj2, motor.lastcoup, motor.Jcourant);
            }
        });


    });

    /*if(isset($_POST['J1']) && isset($_POST['J2']) && isset($_POST['plateau'])
        && isset($_POST['points_J1']) && isset($_POST['points_J2'])
        && isset($_POST['pions_j1']) && isset($_POST['pions_j2']) && isset($_POST['last'])){*/

    var save_bdd = function(id,plateau,points_J1,points_J2,pions_j1,pions_j2,last, jcourant){
        var chainePlateau = "";

        for(var i=0;i<plateau.length;i++){
            chainePlateau += plateau[i];
        }

        $.ajax({
            url: "save_data_partie.php",
            type: "POST",
            data: "id=" + id + "&plateau=" + chainePlateau + "&points_J1=" + points_J1 + "&points_J2=" + points_J2 + "&pions_j1=" + pions_j1 + "&pions_j2=" + pions_j2 + "&last=" + last + "&courant=" + jcourant,
            success: function(data){
                alert(data);
            }
        });
    }

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
