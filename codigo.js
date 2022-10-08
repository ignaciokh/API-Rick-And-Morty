const URL = "https://rickandmortyapi.com/api/character";
const contenedor = document.querySelector(".ContenedorPersonajes");
const contenedorPersonaje = document.querySelector(".ContenedorPersonaje");
const contenedorBoton = document.querySelector(".botonContainer")
let APIdata = "";


const ShowData = (data) => {	


	contenedorPersonaje.innerHTML = "";
	contenedor.innerHTML = "";

	for(let personaje of data )
	{
		contenedor.innerHTML +=
		`
			<div class="card" style="width: 18rem;" 
				onClick=ShowCharacter("${personaje.id}")
			>
		  		<img src=${personaje.image} class="card-img-top" alt=${personaje.name}>
			  	<div class="card-body">
			    	<h5 class="card-title">${personaje.name}</h5>	
			  	</div>
			</div>
		`
	}
}


const ShowCharacter = (data) => {

	contenedorBoton.style = "display: none";
	contenedorPersonaje.innerHTML = "";
	contenedor.innerHTML = "";
	
	for(let personaje of APIdata.results)
	{

		if(personaje.id === parseInt(data))
		{
			contenedorPersonaje.innerHTML =
		`	
			<div class = "ConPersonajeUnico">
		  		<img src=${personaje.image} class="imgPersonaje" alt=${personaje.name}>
			  	<div class="PersonajeUnicoTexto">
				  <h5 class="tituloPersonaje">${personaje.name}</h5>	
				  <ol class="ListaPersonaje">
				 	<li>${personaje.status}</li>
				 	<li>${personaje.species}</li>
				 	<li>${personaje.origin.name}</li>
				 	<li>${personaje.location.name}</li>
				  </ol>
				</div>
			</div>
		`	
		}
	}
}




const AllCharacters = () => {
	contenedorBoton.style = "display: flex";
	ShowData(APIdata.results);	
} 



document.addEventListener("DOMContentLoaded", () => {
	getAPI(URL)
	.then(data => {
		ShowData(data.results)
		APIdata = data;
	})
})