let opener = document.querySelector('.symptoms-answer')

$(".check").click(function() {
    opener.style.display = "block"
});

var generate = document.querySelector(".check");
var hearth1 = document.querySelector(".hearth1");
var heart = ["Miyokard infarkti", "Perikardit", "Miyokardit", "O'tkir xoletsistit", "Pnevmotoraks"];


generate.addEventListener("click", function () {

    generateRandom2();
    
})

function generateRandom2() {
    var randomWord2 = heart[Math.floor(Math.random() * heart.length)];
    hearth1.textContent = randomWord2; 
}