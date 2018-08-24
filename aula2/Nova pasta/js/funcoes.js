
function trocaFonte() {
	document.getElementById("demo").style.fontSize="35px"
}
function Fontetroca() {
	document.getElementById("demo").style.fontSize="18px"
}
function ocultarElemento(){
	document.getElementById("demo").style.display="none";
}	
function mostrarElemento(){
	document.getElementById("demo").style.display="block";
}	
function calcular(){
	var total = document.getElementById("demo").innerHTML= parseFloat (document.getElementById("num1").value) + parseFloat(document.getElementById("num2").value);
	window.alert(total);
}	
