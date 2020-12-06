let dataURL
const output = document.querySelector('.output > p')
const getData = document.querySelectorAll('figure')

for (let i = 0; i < getData.length; i++) {
	getData[i].addEventListener('click', () => {
		fetch(dataURL = `song-${[i+1]}.txt`)
		.then((response) => response.text ? response.text() : new Error("No response.text"))
		.then(function (responseText) {
			output.innerHTML = responseText;
		})
		.catch( function(error) {
			console.error('Upss, an error occurred')
			console.error(error.message)
		})
	})
}