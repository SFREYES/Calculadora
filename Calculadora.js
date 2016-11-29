window.onload=manejarClics;
var cifra1="";
var control=true;


function manejarClics() {
	var Uno=document.getElementById("Uno");
	Uno.addEventListener("click",function() {
								clicEn("1");
								});


	var Dos=document.getElementById("Dos");
	Dos.addEventListener("click",function() {
								clicEn("2");
								});

	var Tres=document.getElementById("Tres");
	Tres.addEventListener("click",function() {
								clicEn("3");
								});

	var Cuatro=document.getElementById("Cuatro");
	Cuatro.addEventListener("click",function() {
								clicEn("4");
								});

	var Cinco=document.getElementById("Cinco");
	Cinco.addEventListener("click",function() {
								clicEn("5");
								});

	var Seis=document.getElementById("Seis");
	Seis.addEventListener("click",function() {
								clicEn("6");
								});

	var Siete=document.getElementById("Siete");
	Siete.addEventListener("click",function() {
								clicEn("7");
								});

	var Ocho=document.getElementById("Ocho");
	Ocho.addEventListener("click",function() {
								clicEn("8");
								});

	var Nueve=document.getElementById("Nueve");
	Nueve.addEventListener("click",function() {
								clicEn("9");
								});

	var Cero=document.getElementById("Cero");
	Cero.addEventListener("click",function() {
								clicEn("0");
								});

	var suma=document.getElementById("Oper1");
	suma.addEventListener("click",function(){
								clicEn("+");
							});


	var resta=document.getElementById("Oper2");
	resta.addEventListener("click",function(){
								clicEn("-");
							});

	var multi=document.getElementById("Oper3");
	multi.addEventListener("click",function(){
								clicEn("*");
							});

	var divi=document.getElementById("Oper4");
	divi.addEventListener("click",function(){
								clicEn("/");
							});


	var Calcular=document.getElementById("Calcular");
	Calcular.addEventListener("click",resultado);

    var Borrar=document.getElementById("Borrar");
	Borrar.addEventListener("click",bor);
	

	var Bm1=document.getElementById("Bm1");
	Bm1.addEventListener("click",Borm1);
	
}


	function clicEn(num) {
		cifra1+=num;
		var pantalla=document.getElementById("Resultado");
		pantalla.textContent=cifra1;

	}


	function resultado() {
		var resutd=eval(cifra1);
		var pantalla=document.getElementById("Resultado");
		pantalla.textContent=resutd;
		
	}

	function bor() {
		cifra1="";
		var pantalla=document.getElementById("Resultado");
		pantalla.textContent=cifra1;
	
	}
	function Borm1(){
		var pantalla=document.getElementById("Resultado");
		var panta=cifra1.slice(0,-1);
		cifra1=panta;
		pantalla.textContent=cifra1;
}





