var colors = ["red", "green", "blue"];
var box = document.querySelector('.box');
console.log(box)

function changeBG(color){
    box.style.background = color;
}

let arrColors = []

for (var i = 0; i < colors.length; i++) {
    arrColors[i] = function() {
        let setColors = i
        setTimeout(() => {
            console.log(`set:${setColors}`);
            changeBG(colors[setColors]);
        }, 1000*setColors)
    }()
};
