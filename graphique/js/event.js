/**
 * Created by antoine on 09/12/14.
 */
$( document ).ready(function() {
    var Jcourant = "b";

    $("td").click(function() {
        if(Jcourant == "b"){
            $(this).html('<div class="circleBlue"></div></td>');
            Jcourant = "r";
        }else{
            $(this).html('<div class="circleRed"></div></td>');
            Jcourant = "b";
        }
    });
});
