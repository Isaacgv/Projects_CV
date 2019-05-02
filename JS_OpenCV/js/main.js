//cambio de color de fondo
document.getElementById("error").style.color ="#00FF00";
//otro ejemplo de cambio de color
var x = document.getElementById("error")
x.style.fontSize = "30px";
x.style.backgroundColor="#999999"

//Cambio de texto
document.getElementsByTagName("h1")[0].innerHTML = "cambio de texto";

var y = document.getElementsByClassName("correcto")[0];

//manda la variable qa la consola
console.log(y)
y.style.textAlingn = "right";