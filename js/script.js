function encotrarLetra(artista, musica) {
	return fetch(`https://api.lyrics.ovh/v1/${artista}/${musica}`);
}

const btn = document.querySelector('#pesquisar');
const musica = document.querySelector('#musica');
const artista = document.querySelector('#artista');

btn.addEventListener('click', el =>{
	el.preventDefault();
	pesquisar();
});

async function pesquisar(){
	if (musica.value !== 0 && musica.value !== '') {
		const letra = document.querySelector('#letra');	
		letra.innerHTML =

		`
		<div class="lds-roller">
			<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
		</div>
		
		`;


	//then
	/*	encotrarLetra(artista.value, musica.value)
			.then(response => response.json())
			.then(data => {
				if (data.lyrics) {
					letra.innerText = data.lyrics
				} else {
					letra.innerText = data.error;
				}
			})
			.catch(err =>{
				letra.innerText = `Putz! ${err}`;
			})
	*/
			//async await
			try{
				const letrasResponse = await encotrarLetra(artista.value, musica.value);
				const data = await letrasResponse.json();
				letra.innerText = data.lyrics;
			} catch (err){
				console.log(err)
			}
		}
}