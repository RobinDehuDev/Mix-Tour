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
    <script src="js/event.js"></script>
    <title>Mix-Tour</title>
</head>

<body>
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container">
        <a class="navbar-brand" href="#">Mix-Tour</a>
    </div>
</nav>

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
                    <th><?php echo (5 -$i) ?></th>

                    <td id="<?php echo (5 -$i) ?>a"></td>
                    <td id="<?php echo (5 -$i) ?>b"></td>
                    <td id="<?php echo (5 -$i) ?>c"></td>
                    <td id="<?php echo (5 -$i) ?>d"></td>
                    <td id="<?php echo (5 -$i) ?>e"></td>


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
