var contador = 0;
var boton = document.getElementById('boton1');
boton.addEventListener('click', function() {
   contador++;
   boton.textContent = contador + ' Like' ;
});


var boton = document.getElementById("boton1")
boton.addEventListener("click", function(){
    alert("Has dado Me Gusta en este Post");
});