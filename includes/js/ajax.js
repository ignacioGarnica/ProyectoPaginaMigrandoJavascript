
window.onload = function (){
    cargar();    
}

 function cargar(){

    $('#listaComentarios').load('includes/php/listar.php');
}

function objetoAjax(){
  var xmlhttp=false;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
 
  try {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  } catch (E) {
    xmlhttp = false;
  }
}
 
if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}
 
function eliminarComentario(IdComentario){
   
   cargar();

   ajax=objetoAjax();
   
   ajax.open("GET", "includes/php/eliminar.php?IdComentario="+IdComentario);
   ajax.onreadystatechange=function() {
   if (ajax.readyState==4) {
        console.log("comentarioeliminado");
   }
}
   ajax.send(null);

   cargar();
   
}

function modificarComentario(IdComentario){
    
    cargar();

    var rescateComentario = $("#comentarioCajita"+IdComentario).val();
    console.log("rescateComentario")
    ajax=objetoAjax();
    ajax.open("GET", "includes/php/modificar.php?rescateId="+IdComentario+"&rescateComentario="+rescateComentario);
    if (ajax.readyState==4) {
        console.log("comentariomodificado");
   }
   ajax.send(null);

   cargar();

}