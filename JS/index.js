var cuadros = document.getElementsByClassName('cuadros');
var turnAlert = document.getElementById('Turno');

var turno = true;

for(var i=0; i<cuadros.length; i++){
	cuadros[i].addEventListener('click', clickeado);
}

function clickeado() {
	if(turno){
		turnAlert.innerHTML = "Turno del jugador #2";
		turnAlert.style.color = "#ffb677";
    this.innerHTML = "X";
	}
	else{
		turnAlert.innerHTML="Turno del jugador #1";
		turnAlert.style.color = "#219897";
    this.innerHTML = "O";
	}
	turno = !turno;


}
