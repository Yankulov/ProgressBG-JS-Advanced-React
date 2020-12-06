const AJAXcall = () => {
	let xhr = new XMLHttpRequest()
	xhr.open("GET", dataURL, true)
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			output.innerHTML = this.responseText
		}
	}
	xhr.send()
}

let dataURL
const output = document.querySelector('.output > p')
const getData = document.querySelectorAll('figure')

for (let i = 0; i < getData.length; i++) {
	getData[i].addEventListener('click', () => {
		// console.log(getData[i])
		// console.log(i)
		dataURL = `song-${[i+1]}.txt`
		AJAXcall()
	})
}