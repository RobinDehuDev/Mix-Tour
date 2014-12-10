<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap-theme.min.css">
    <LINK href="style.css" rel="stylesheet" type="text/css">
    <script src="js/jquery-2.1.1.min.js"></script>
    <script src="../moteur/src/moteur.js"></script>
    <script src="js/event.js"></script>
    <title>Mix-Tour</title>
</head>

<body>
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container">
        <a class="navbar-brand" href="#">Mix-Tour</a>
    </div>
</nav>

<legend style="top:13px;text-align:center;left:100px;right:100px"> CHRONOMETRE:
    <div id="chrono" style="text-align:center">
        <?php

        function microtime_float()
        {
            list($usec, $sec) = explode(" ", microtime());
            return ((float)$usec + (float)$sec);
        }

        $debut=0;
        $fin  = microtime_float();
        $time = $fin - $debut;
        echo  $time." secondes\n";



        ?></div></legend>

<div class="container text-center">
    <div class="pagination-centered">
        <table border="1 solid">

            <tr>
                <?php
                for($i=0;$i<7;$i++){
                    echo "<th></th>";
                }
                ?>
            </tr>
            <?php
            for($i=0;$i<5;$i++){ ?>
            <tr>
                <th><?php echo $i ?></th>

                <td id="<?php echo $i ?>0"></td>
                <td id="<?php echo $i ?>1"></td>
                <td id="<?php echo $i ?>2"></td>
                <td id="<?php echo $i ?>3"></td>
                <td id="<?php echo $i ?>4"></td>


                <?php
                echo "<th></th>";
                echo "</tr>";
                }
                ?>

            <tr>
                <th></th>
                <th> a</th>
                <th> b</th>
                <th> c</th>
                <th> d</th>
                <th> e</th>
                <th></th>

            </tr>

        </table>
    </div>

</div>


<div id="player1" style="position:absolute;height:200px;width:100px;left:20px;top:140px;width: 200px">
    <form name="form1">
        <input  type="button" onclick="verif("form1")" name="j1" value="First Player" class=" btn-primary btn btn-striped" style="width: 200px"></div>
<div id="nbpion1" style="position:absolute;height:200px;width:100px;left:20px;top:175px;width: 200px"
<label style="font-size:10px">Pions restants :<input type="text" value="0" size="4" name="resultj1" style=" text-align:center;background-color:#A8CCEA;width: 200px"><br /></label></div>
    <div id="nbpoins1" style="position:absolute;height:200px;width:100px;left:20px;top:220px;width: 200px"
    <label style="font-size:10px">Points gagnes :<input type="text" value="0" size="4" name="resultj1" style=" text-align:center;background-color:#A8CCEA;width: 200px"></label></div>

        </form>





        <div id="player2" style="position:absolute;height:200px;width:100px;left:20px;top:280px">
            <form name="form2">
                <input type="button" onclick="verif("form2")" name="j2" value="Second Player"class=" btn-primary btn btn-striped" style="width: 200px"></div>

        <div id="nbpion2" style="position:absolute;height:200px;width:100px;left:20px;top:315px;width: 200px"
        <label style="font-size:10px">Pions restants :<input type="text" value="0" size="4" name="resultj2"style=" text-align:center;background-color:#A8CCEA;width: 200px"><br /></label></div>
            <div id="nbpoins2" style="position:absolute;height:200px;width:100px;left:20px;top:360px;width: 200px"
            <label style="font-size:10px">Points gagnes :<input type="text" value="0" size="4" name="resultj2"style=" text-align:center;background-color:#A8CCEA;width: 200px"></label></div>
                </form>




                <div id="adversaire" style="position:absolute;height:200px;width:250px;left:20px;top:440px">
                    <fieldset>
                        <legend> Vous voulez jouez contre: </legend>
                        <form name="form3">
                            <input type="radio" checked="" onclick="choix()" name="ba">
                            Un autre joueur:
                            <br>
                            <br>
                            <input type="radio" onclick="choix()" name="ba">
                            Contre Moi??!! et je vais gagner :
                        </form></div></fieldset>
                <div>
                    <button type="reset" onclick="demarrer()" name="restart" value="Recommencer?" class="btn btn-lg btn-primary btn-block" style="position:absolute;top:700px; width: 250px;left:640px;right:250">Recommencer ?</button></div>


</body>
</html>

<?php
/**
 * Created by PhpStorm.
 * User: Yane
 * Date: 09/12/2014
 * Time: 09:56
 */

?>