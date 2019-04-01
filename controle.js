$(document).ready(function () {
	$('#Modal').modal('show');
})

function Sair() {
	window.location.href = "../index.html";
}

function EntrarViolino() {
	var senha = document.getElementById("campoSenha").value; 
	if (senha != "ofcviolino") {
		window.location.href = "../index.html";
	}
}

function EntrarViola() {
	var senha = document.getElementById("campoSenha").value; 
	if (senha != "ofcviola") {
		window.location.href = "../index.html";
	}
}

function EntrarFlauta() {
	var senha = document.getElementById("campoSenha").value; 
	if (senha != "ofcflauta") {
		window.location.href = "../index.html";
	}
}

function EntrarClarinete() {
	var senha = document.getElementById("campoSenha").value; 
	if (senha != "ofcclarinete") {
		window.location.href = "../index.html";
	}
}

function EntrarSaxAlto() {
	var senha = document.getElementById("campoSenha").value; 
	if (senha != "ofcsax") {
		window.location.href = "../index.html";
	}
}

function EntrarSaxTenor() {
	var senha = document.getElementById("campoSenha").value; 
	if (senha != "ofctenor") {
		window.location.href = "../index.html";
	}
}

function EntrarTrompete() {
	var senha = document.getElementById("campoSenha").value; 
	if (senha != "ofctrompete") {
		window.location.href = "../index.html";
	}
}

function EntrarTrombone() {
	var senha = document.getElementById("campoSenha").value; 
	if (senha != "ofctrombone") {
		window.location.href = "../index.html";
	}
}