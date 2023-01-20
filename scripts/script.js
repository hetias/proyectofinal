//botones

let aboutButton = document.getElementById("about-button");

let knowButton = document.getElementById("know-button");

let expButton = document.getElementById("exp-button");

//divs

let aboutDiv = document.getElementById("about-div");

let knowDiv = document.getElementById("know-div");

let expDiv = document.getElementById("exp-div");

//running code? like main

aboutButton.addEventListener('click', function(){
	show_button(1);
});

knowButton.addEventListener('click', function(){
	show_button(2);
});

expButton.addEventListener('click', function(){
	show_button(3);
});

//functions

function show_button(boton){
	
	//hides all divs
	hide_all();
	
	//but show the one we want, changing style propierites from the DOM
	if(boton == 1)
	{	
		aboutDiv.style.backgroundColor = "#8d99ae";
		aboutDiv.style.boxShadow = "0.2em 0.2em 0.5em rgba(0, 0, 0, 0.5)";
	}else if(boton == 2)
	{
		knowDiv.style.backgroundColor = "#8d99ae";
		knowDiv.style.boxShadow = "0.2em 0.2em 0.3em rgba(0, 0, 0, 0.5)";
	}
	else if(boton == 3){
		expDiv.style.display = "block";
		expDiv.style.backgroundColor = "#8d99ae";
		expDiv.style.boxShadow = "0.2em 0.2em 0.3em rgba(0, 0, 0, 0.5)";
	}

}

function hide_all(){
	aboutDiv.style.backgroundColor = " #2b2d42";
	aboutDiv.style.boxShadow = "none";
	
	knowDiv.style.backgroundColor = " #2b2d42";
	knowDiv.style.boxShadow = "none";
	
	expDiv.style.backgroundColor = "#2b2d42";
	expDiv.style.boxShadow = "none";
}


