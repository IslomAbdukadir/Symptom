let opener = document.querySelector('.symptoms-answer')

$(".check").click(function() {
    opener.style.display = "block"
});

var generate = document.querySelector(".check");
var h1 = document.querySelector(".symptoms-answer-txt_1");
var h2 = document.querySelector(".symptoms-answer-txt_2");
var head = ["Klassik migren", "Oddiy migren", "Yuz migrenlari", "Xortonning bosh og'rig'i", "Psixogen bosh og'rig'i"];
var heart = ["Miyokard infarkti", "Perikardit", "Miyokardit", "O'tkir xoletsistit", "Pnevmotoraks"];


generate.addEventListener("click", function () {

    generateRandom();

})

function generateRandom() {
    var randomWord = head[Math.floor(Math.random() * head.length)];
    h1.textContent = randomWord; 
}

function generateRandom() {
    var randomWord = heart[Math.floor(Math.random() * heart.length)];
    h2.textContent = randomWord; 
}