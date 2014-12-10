/**
 * Created by jdevin on 09/12/14.
 */

MonTestCase=TestCase("Mon Test Case");
MonTestCase.prototype.testA=function(){
  var motor = new moteur();
    motor.init_plateau();

  assertTrue(motor.tab[0]=== 0);

  assertTrue(motor.get_pos(2,2)=== 12);
  assertTrue(motor.get_tete_pile(2,2)===0);
};