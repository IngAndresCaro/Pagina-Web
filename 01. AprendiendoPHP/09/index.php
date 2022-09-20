<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Aprendiendo PHP</title>
    <link href="https://fonts.googleapis.com/css?family=Proza+Libre" rel="stylesheet">

    <link rel="stylesheet" href="css/estilos.css" media="screen" title="no title">
  </head>
  <body>

    <div class="contenedor">
      <h1>Aprendiendo PHP</h1>

        <div class="contenido">
            <?php
                // versiones anteriores
                echo "<h1>TECNOLOGIAS</h1>";
                echo "<hr>";

                $tecnologias = ['CSS', 'HTML', 'JavaScript', 'jQuery'];
                echo $tecnologias[0];
                echo "<hr>";
                echo $tecnologias[1];
                echo "<hr>";
                echo $tecnologias[2];
                echo "<hr>";
                echo $tecnologias[3];
                echo "<hr>";
                echo "<h1>LENGUAJES</h1>";
                $lenguajes = array('CSS', 'jQuery', 'PHP', 'MySQL');
                echo "<hr>";
                echo $lenguajes[0];
                echo "<hr>";
                echo $lenguajes[1];
                echo "<hr>";
                echo $lenguajes[2];
                echo "<hr>";
                echo $lenguajes[3];
            ?>
        </div>
    </div>




  </body>
</html>
