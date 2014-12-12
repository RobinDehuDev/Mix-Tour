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
