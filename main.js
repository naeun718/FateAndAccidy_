let script1 = document.querySelector(".Script1");
let script2 = document.querySelector(".Script2");
let ingame1 = document.querySelector(".InGame1");
let ingame2 = document.querySelector(".InGame2");
let Accidy1 = document.querySelector(".Character1");
let Accidy3 = document.querySelector(".Character3");
let Accidy2 = document.querySelector(".Character2");
let Accidy4 = document.querySelector(".Character4");

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    console.log("scrollY", value)

    if (value > 750) {
        script1.style.animation = "disappearLeft 1s ease-out forwards";
    } 
    if (value > 950) {
        script2.style.animation = "disappearRight 1s ease-out forwards";
    }
    else{
        script1.style.animation= "slideLeft 1s ease-out";
        script2.style.animation= "slideRight 1s ease-out";
    }

    if(value > 1700) {
        ingame1.style.animation = "disappearLeft 1s ease-out forwards";
        ingame2.style.animation = "disappearRight 1s ease-out forwards";
    }
    else{
        ingame1.style.animation = "slideLeft 1s ease-out forwards";
        ingame2.style.animation = "slideRight 1s ease-out forwards";
    }


});
