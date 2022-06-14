let opener = document.querySelector('.symptoms-answer')

$(".check").click(function() {
    opener.style.display = "block"
});

var generate = document.querySelector(".check");
var headh1 = document.querySelector(".headh1");
var hearth1 = document.querySelector(".hearth1");
var head = ["Klassik migren", "Oddiy migren", "Yuz migrenlari", "Xortonning bosh og'rig'i", "Psixogen bosh og'rig'i"];
var heart = ["Miyokard infarkti", "Perikardit", "Miyokardit", "O'tkir xoletsistit", "Pnevmotoraks"];


generate.addEventListener("click", function () {

    generateRandom();

})

function generateRandom() {
    var randomWord = head[Math.floor(Math.random() * head.length)];
    headh1.textContent = randomWord; 
}

generate.addEventListener("click", function () {

    generateRandom2();

})

function generateRandom2() {
    var randomWord = heart[Math.floor(Math.random() * heart.length)];
    hearth1.textContent = randomWord; 
}