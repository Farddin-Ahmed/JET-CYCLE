//NAVBAR/LOGO BUTTON
const refreshbttn = document.getElementById("refbttn");
refreshbttn.addEventListener("click", () => {
    window.location.reload();
})

//NAVBAR/HUMBURGER-MENUE
const hmbttn = document.getElementById("hbi");
const hmmenu = document.getElementById("hbm");
hmbttn.addEventListener("click", () => {
    if(hmmenu.style.display == "flex"){
        hmmenu.style.display = "none";
    }
    else{
        hmmenu.style.display = "flex";
    }
})

//MAIN SECTION/TEXT ANIMATION
let typed = new Typed('.typing', {
    strings: ["Cycling is a great exercise which helps in keeping me healthy.", "A bicycle is a useful vehicle that helps us reach a destination without polluting the environment."],
    typeSpeed: 100,
    backspeed: 100,
    loop: true
  });

//MAIN SECTION/IMG BUTTON
const button1 = document.getElementById("b1");
const button2 = document.getElementById("b2");
const button3 = document.getElementById("b3");
const img = document.getElementById("showimg");
button1.addEventListener("click", () => {
    img.src = "./public/img/bimg(1).png"
    button1.style.backgroundColor = "black";
})
button2.addEventListener("click", () => {
    img.src = "./public/img/bimg(2).png"
    button2.style.backgroundColor = "black";
})
button3.addEventListener("click", () => {
    img.src = "./public/img/bimg(3).png"
    button3.style.backgroundColor = "black";
})

//MAIN SECTION/IMG AUTO CHANGE
const images = ["./public/img/bimg(1).png", "./public/img/bimg(2).png", "./public/img/bimg(3).png"];
let index = 0;
function updateImage(){
img.src = images[index];
index = (index + 1) % images.length;
button1.style.backgroundColor = "green";
button2.style.backgroundColor = "green";
button3.style.backgroundColor = "green";
if(index == 1){
    button1.style.backgroundColor = "black";
}
else if(index == 2){
    button2.style.backgroundColor = "black";
}
else{
    button3.style.backgroundColor = "black";
}
}
setInterval(updateImage, 2000);

//MAIN SECTION/PAGE ANIMATION/GSAP