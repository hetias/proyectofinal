//botones

let aboutButton = document.getElementById("about-button");

let knowButton = document.getElementById("know-button");

let expButton = document.getElementById("exp-button");

//divs

let aboutDiv = document.getElementById("about-div");

let knowDiv = document.getElementById("know-div");

let expDiv = document.getElementById("exp-div");


aboutButton.addEventListener('click', function(){
	show_button(1);
});

knowButton.addEventListener('click', function(){
	show_button(2);
});

expButton.addEventListener('click', function(){
	show_button(3);
});


function show_button(boton){
	
	aboutDiv.style.backgroundColor = " #3D1766";
	aboutDiv.style.boxShadow = "none";
	
	knowDiv.style.backgroundColor = " #3D1766";
	knowDiv.style.boxShadow = "none";
	
	expDiv.style.backgroundColor = "#3D1766";
	expDiv.style.boxShadow = "none";
	
	if(boton == 1)
	{
		//resaltar about
		console.log("about!");
		aboutDiv.style.backgroundColor = "#6F1AB6";
		aboutDiv.style.boxShadow = "0.2em 0.2em 0.5em rgba(0, 0, 0, 0.5)";
	}else if(boton == 2)
	{
		//resaltar know
		console.log("know!");
		knowDiv.style.backgroundColor = "#6F1AB6";
		knowDiv.style.boxShadow = "0.2em 0.2em 0.3em rgba(0, 0, 0, 0.5)";
	}
	else if(boton == 3){
		//resaltar experience
		console.log("exp!");
		expDiv.style.backgroundColor = "#6F1AB6";
		expDiv.style.boxShadow = "0.2em 0.2em 0.3em rgba(0, 0, 0, 0.5)";
	}
}
