/*la fonction getElementByTagName renvoie une liste des éléments portant le nom de balise donné ici "span".*/
  var sp = document.getElementsByTagName("span");
  var p = document.getElementsByTagName("p");
  var btn_start=document.getElementById("start");
  var btn_stop=document.getElementById("stop");
  var btn_tour=document.getElementById("tour");
  var t;
  var ms=0,s=0,mn=0,h=0;
  var i=0;
  btn_tour.disabled=true;

   /*La fonction "start" démarre un appel répétitive de la fonction update_chrono par une cadence de 100 milliseconde en utilisant setInterval et désactive le bouton "start" */

  function start(){
   t =setInterval(update_chrono,100);
   btn_start.disabled=true;
   btn_stop.disabled=false;
   btn_tour.disabled=false;
   var audio = new Audio('start.mp3');
   audio.play();
  }
  /*La fonction update_chrono incrémente le nombre de millisecondes par 1 <==> 1*cadence = 100 */
  function update_chrono(){
    ms+=1;
    /*si ms=10 <==> ms*cadence = 1000ms <==> 1s alors on incrémente le nombre de secondes*/
       if(ms==10){
        ms=1;
        s+=1;
       }
       /*on teste si s=60 pour incrémenter le nombre de minute*/
       if(s==60){
        s=0;
        mn+=1;
       }
       if(mn==60){
        mn=0;
        h+=1;
       }
       /*afficher les nouvelle valeurs*/
       sp[0].innerHTML=h+" h";
       sp[1].innerHTML=mn+" min";
       sp[2].innerHTML=s+" s";
       sp[3].innerHTML=ms+" ms";

  }

	/*on arrête le "timer" par clearInterval ,on réactive le bouton start */
	function stop(){
    clearInterval(t);
    btn_start.disabled=false;
    btn_stop.disabled=true;
    btn_tour.disabled=true;
    affiche();
    var audio = new Audio('stop.mp3');
    audio.play();
	}
  /*dans cette fonction on arrête le "timer" ,on réactive le bouton "start" et on initialise les variables à zéro */
  function reset(){
   clearInterval(t);
    btn_start.disabled=false;
    btn_tour.disabled=true;
    ms=0,s=0,mn=0,h=0;
    /*on accède aux différents span par leurs indice*/
    sp[0].innerHTML=h+" h";
    sp[1].innerHTML=mn+" min";
    sp[2].innerHTML=s+" s";
    sp[3].innerHTML=ms+" ms";
    var audio = new Audio('reset.mp3');
    audio.play();
  }

  function tour() {
    btn_tour.disabled=false;
    affiche();
    var audio = new Audio('tour.mp3');
    audio.play();
  }

  function clear() {
    var j = 0;
    while (j<101) {
    p[j].innerHTML= "";
    j = j + 1;
    }
    var audio = new Audio('clear.mp3');
    audio.play();
  }

  function affiche() {

    p[i].innerHTML= h + " h "+ mn + " min " + s + " s " + ms + " ms ";
    // insertion();
    i = i + 1;
  }

  function supprime() {
    clear();
  }

  // function insertion() {
  //   let newP = document.createTextNode('<p> </p>');
  //   newP.TextContent;
  // }
