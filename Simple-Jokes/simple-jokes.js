const output = document.querySelector('.output > p')
const getData = document.querySelector('.getData')

getData.addEventListener('click', () => {
	fetch('http://api.icndb.com/jokes/random')
	.then( (response) => {
		return response.json()
	})
	.then( (data) => {
		output.innerHTML = (data["value"]["joke"])
	})
})