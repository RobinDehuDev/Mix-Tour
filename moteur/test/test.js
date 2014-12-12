/**
 * Created by jdevin on 09/12/14.
 */
var motor = new moteur();
MonTestCase=TestCase("Mon Test Case");
MonTestCase.prototype.testA=function(){
    motor.init_plateau();

  assertTrue(motor.tab[0]=== 0);


  };

MonTestCase.prototype.testB=function(){
    assertTrue(motor.get_pos(2,2)=== 12);
};

MonTestCase.prototype.testC=function(){
    assertTrue(motor.get_tete_pile(2,2)===0);
};
MonTestCase.prototype.testD=function(){
    motor.place_marble(2,2);
    assertTrue(motor.get_tete_pile(2,2)===1);
    assertTrue(motor.nbpj1 === 24);
};
MonTestCase.prototype.testE=function(){
    assertTrue(motor.ligne_droite(0,0,1,1)===true);
};
MonTestCase.prototype.testF=function(){
    assertTrue(motor.distance_cases(2,3,1,2)===1);
    assertTrue(motor.distance_cases(0,2,0,4)===2);
};
MonTestCase.prototype.testG=function(){
    motor.tab[motor.get_pos(4,4)]=11;
    assertTrue(motor.coup_possible(1,2,2,4,4)===true);
};
MonTestCase.prototype.testH=function(){
    motor.deplacer_tour(1,2,2,4,4);

    assertTrue(motor.tab[motor.get_pos(4,4)]==111);
    assertTrue(motor.tab[motor.get_pos(2,2)]==0);
    assertTrue(motor.lastcoup == 11224);
};

MonTestCase.prototype.testI=function(){
    motor.changetour();
    assertTrue(motor.Jcourant===2);
};

MonTestCase.prototype.testJ=function(){
    motor.ajoutJetonJoueurCourant(-1);
    assertTrue(motor.getJetonsJoueurCourant()==24);
};
MonTestCase.prototype.testK=function(){
    motor.place_marble(3,4);
    console.log(motor.tab[motor.get_pos(4,4)]);
    console.log(motor.tab[motor.get_pos(3,4)]);
    motor.deplacer_tour(2,4,4,3,4);
    console.log(motor.tab[motor.get_pos(4,4)]);
    console.log(motor.tab[motor.get_pos(3,4)]);
    assertTrue(motor.tab[motor.get_pos(4,4)]==1);
    assertTrue(motor.tab[motor.get_pos(3,4)]==112);
};

MonTestCase.prototype.testL=function() {
    motor.place_marble(0, 0);
    motor.place_marble(1, 1);
    motor.deplacer_tour(1, 1, 1, 0, 0);
    assertTrue(motor.lastcoup == 10600);
};

MonTestCase.prototype.testM=function() {
    var player1=new Joueur();
    player1.init(1,2,3);
    var player2=new Joueur();
    player2.init(2,5,5);
    var player3=new Joueur();
    player3.init(3,0,2);
    var player4=new Joueur();
    player4.init(4,1,3);
    var mm=new matchmaking();

    var Aj= new Array();
    Aj.push(player1);
    Aj.push(player2);
    Aj.push(player3);
    Aj.push(player4);
    mm.init_matchmaking(4,Aj);
    var joueurA=new Joueur();
    joueurA.init(5,3,4);


    assertTrue(mm.cherche_adversaire(joueurA).id==1);
};
MonTestCase.prototype.testN=function() {
    var moteur2=new moteur();
    moteur2.init_plateau();
    moteur2.tab[moteur2.get_pos(0,0)]=11;
    moteur2.changetour();
    moteur2.place_marble(0, 1);
    moteur2.deplacer_tour(2, 0, 0, 0, 1);
    console.log("ahah1: "+moteur2.tab[moteur2.get_pos(0,0)]);
    console.log("ahah2: "+moteur2.tab[moteur2.get_pos(0,1)]);
    assertTrue(moteur2.tab[moteur2.get_pos(0,0)]==0);
    assertTrue(moteur2.tab[moteur2.get_pos(0,1)]==112);

};
