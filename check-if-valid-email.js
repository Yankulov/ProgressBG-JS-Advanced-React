// const userMails = [
// 	"progressg.www.courses@gmail.com", // OK
// 	"progressbg@gmail.coms", // not
// 	"progressbg-www@gmail.com", // OK
// 	"@gmail.com", // not 
// 	"*progressbg*@gmail.com", // not
// 	"progressbg@com", // not 
// ]

let input = document.querySelector('[name="email"]')
let check = document.querySelector('.check')
let output = document.querySelector('.output > p')

const re = /^[a-zA-Z0-9.!#$%&{|}-]+@[a-zA-Z0-9]+\.([a-z])\w{1,2}$/

check.addEventListener('click', () => {
    // output.innerHTML = `${input.value}`
    if (re.test(input.value)) {
        output.innerHTML = `Match`
    } else {
        output.innerHTML = `Not match`
    }
})
