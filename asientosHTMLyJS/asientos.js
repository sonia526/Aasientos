var asientos = document.getElementsByTagName('td');
for (var i = 0; i < asientos.length; i++) {
    asientos[i].addEventListener('click',redirect,false);
}
function redirect(event){
    var asiento=(event.target.textContent);
    var mostrar=document.getElementById("mostrar");
    mostrar.innerHTML=asiento;
    (event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#F8ED50';
}
function buscar(ingreso){
	var ingreso=document.getElementById("nro_dni").value;
  var operacion= ingreso*2;
  document.getElementById("nro_dni").value=operacion;
}
function reserva(){
//hola lo de abajo es mi inplementacion
  var nombre =document.getElementById("nombre").value;
  var apellido= document.getElementById("apellido").value;
  var dni=document.getElementById("dni").value;
  var resultado=getElementById("mostrar");

      
  reservar.innerText=resultado( document.getElementById('mostrar').value);
}


function selecionar(){


}

























