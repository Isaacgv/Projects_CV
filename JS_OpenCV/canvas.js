
var dibujo, lienzo, t, b;
function inicio()
{   //obteniendo el valor del usuario
    t=document.getElementById("usuario");
    //boton para dibujar
    b=document.getElementById("dibujalo");

    dibujo = document.getElementById("lienzo");
    
    lienzo =dibujo.getContext("2d");

    b.addEventListener("click", dibujarGrilla);

    //comenzar un trazo nuevo
    lienzo.beginPath();
    //estilo de trazo
    lienzo.strokeStyle="#00F";

    //Dibujamos la circunferencia
    lienzo.arc(150,150,100,0,(Math.PI*2), false);
    //cerrar el trazo
    lienzo.closePath();
    //Dibujamos
    lienzo.stroke();
    

}

function dibujarGrilla()
{
    var pony = lienzo;

    //numero de rayas veticales y horizontales
    var rayas = Number(t.value);
    var ancho = 300, alto = 300;
    var linea, punto;
    //espacio entre lineas
    var ancholinea = ancho / rayas;
    //N lineas X e Y
    var limiteX = ancho/ ancholinea;
    var limiteY = alto/ ancholinea;

    pony.strokeStyle="#AAA";

    //lineas verticales
    for(linea=0; linea<=limiteX; linea++)
    {
        punto =(linea*ancholinea) - 0.5;
        pony.beginPath();
        pony.strokeStyle = "#AAA";
        pony.moveTo(punto, 0.5);
        pony.lineTo(punto, ancho-0.5);
        pony.stroke();
        pony.closePath();
    }

    for(linea=0; linea<=limiteY; linea++)
    {
        punto =(linea*ancholinea) - 0.5;
        pony.beginPath();
        pony.strokeStyle = "#AAA";
        pony.moveTo(0.5, punto);
        pony.lineTo(alto - 0.5, punto);
        pony.stroke();
        pony.closePath();
    }


}