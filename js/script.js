let opener = document.querySelector('.symptoms-answer')

$(".check").click(function() {
    opener.style.display = "block"
});

var generate = document.querySelector(".check");
var headh1 = document.querySelector(".headh1");
var head = ["Klassik migren", "Oddiy migren", "Yuz migrenlari", "Xortonning bosh og'rig'i", "Psixogen bosh og'rig'i"];

generate.addEventListener("click", function () {

    generateRandom();
})

function generateRandom() {
    var randomWord1 = head[Math.floor(Math.random() * head.length)];
    headh1.textContent = randomWord1; 
}