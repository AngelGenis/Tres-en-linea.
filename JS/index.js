'use strict'

var alerta = document.querySelector("#Turno");
var cuadros = document.getElementsByClassName('cuadros');
var reiniciar = document.querySelector("#Reiniciar");
var turno1 = true;
var terminado = 0;

for(var i=0; i<cuadros.length; i++){
	cuadros[i].addEventListener('click', function(){
		if(turno1){
			this.innerHTML = 'X';
			alerta.innerHTML = "Turno del jugador #2";
			alerta.style.color = "#ff2e4c";
			terminado++;
		}
		else{
			this.innerHTML = "O";
			alerta.innerHTML = "Turno del jugador #1";
			alerta.style.color = "#2e99b0";
			terminado++;
		}
		if(ganador()){
			alerta.innerHTML = "El ganador es el jugador #";
			//turno1 ? alerta.innerHTML += 1 : alerta.innerHTML += 2;
			alerta.innerHTML += (turno1 ?  1 : 2);
			document.querySelector('#Tabla').style.pointerEvents = "none";
		}
		this.style.pointerEvents = "none";
		turno1 = !turno1;

		if(!ganador() && terminado==9 ){
				alerta.innerHTML = "Nadie Gano!";
			}

	});
}
/*
camelCase
kebab-case
snake_case
*/
function ganador(){
	if(cuadros[0].innerHTML == cuadros[1].innerHTML && cuadros[0].innerHTML == cuadros[2].innerHTML && cuadros[0].innerHTML != ""){
		return true;
	}

	if(cuadros[3].innerHTML == cuadros[4].innerHTML && cuadros[3].innerHTML == cuadros[5].innerHTML && cuadros[3].innerHTML != ""){
		return true;
	}

	if(cuadros[6].innerHTML == cuadros[7].innerHTML && cuadros[6].innerHTML == cuadros[8].innerHTML && cuadros[6].innerHTML != ""){
		return true;
	}

	if(cuadros[0].innerHTML == cuadros[3].innerHTML && cuadros[0].innerHTML == cuadros[6].innerHTML && cuadros[0].innerHTML != ""){
		return true;
	}

	if(cuadros[1].innerHTML == cuadros[4].innerHTML && cuadros[1].innerHTML == cuadros[7].innerHTML && cuadros[1].innerHTML != ""){
		return true;
	}

	if(cuadros[2].innerHTML == cuadros[5].innerHTML && cuadros[2].innerHTML == cuadros[8].innerHTML && cuadros[2].innerHTML != ""){
		return true;
	}

	if(cuadros[0].innerHTML == cuadros[4].innerHTML && cuadros[0].innerHTML == cuadros[8].innerHTML && cuadros[0].innerHTML != ""){
		return true;
	}
	if(cuadros[2].innerHTML == cuadros[4].innerHTML && cuadros[2].innerHTML == cuadros[6].innerHTML && cuadros[2].innerHTML != ""){
		return true;
	}
	return false;
}



reiniciar.addEventListener('click', ()=>{
	location.reload();
});
