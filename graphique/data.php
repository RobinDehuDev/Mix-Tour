<?php
    //echo '{"plateau":"1211 2211 2 11 222 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 11 2 222","points_J1":"12","points_J2":"21","last":0,"pions_j1":null,"pions_j2":null}';

$link = mysql_connect("localhost", "antoine", "02101989") or die("Impossible de se connecter : " . mysql_error());
mysql_select_db('mix-tour',$link) or die ("erreur de connexion base");

if(isset($_POST['idplateau'])){
    $sql = "SELECT * from partie where id =".$_POST['idplateau'];
    $req = mysql_query($sql);

    //echo $sql;

    while($data = mysql_fetch_assoc($req))
    {
        echo json_encode($data);
    }
}


?>