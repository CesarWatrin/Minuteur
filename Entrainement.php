<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/Entrainement.css">
    <title></title>
  </head>
  <body>
    <div class="chronometre">
      <div class="tim">
  	     <span >0 h</span> :
  	     <span >0 min</span> :
  	     <span >0 s</span> :
  	     <span >0 ms</span>

      </div>
      <button id="start" onclick="start()">Lancer</button>
      <button id="tour" onclick="tour()">Tour</button>
      <button id="stop" onclick="stop()">Arrêter</button>
      <button id="reset" onclick="reset()">Réinitialiser</button>
      <button id="clear" onclick="supprime()">Nettoyer</button>
    </div>

    <div class="LesTours">
      <p>

      </p>


      <?php
      $i = 0;
      while($i < 100) {
        echo "  <p>  </p>";
        $i = $i + 1;
      }
       ?>
    </div>




    <script src="Entrainement.js"></script>
  </body>
</html>
