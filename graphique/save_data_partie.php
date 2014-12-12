<?php
/**
 * Created by PhpStorm.
 * User: antoine
 * Date: 12/12/14
 * Time: 09:37
 */


if(isset($_POST['id']) && isset($_POST['plateau'])
    && isset($_POST['points_J1']) && isset($_POST['points_J2'])
    && isset($_POST['pions_J1']) && isset($_POST['pions_J2']) && isset($_POST['last']) && isset($_POST['courant'])){

    extract($_POST);

    $link = mysql_connect("localhost", "antoine", "02101989") or die("Impossible de se connecter : " . mysql_error());
    mysql_select_db('mix-tour',$link) or die ("erreur de connexion base");



    $sql = "UPDATE partie SET etat_plateau='$plateau', points_J1=$points_J1, points_J2=$points_J2, courant=$courant, derniercoup=$last, pions_J1=$pions_J1, pions_J2=$pions_J2 WHERE id=$id";

    mysql_query($sql);
    //echo $sql;
    mysql_close();

}

?>