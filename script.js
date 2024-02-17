let $ = document;
let isCarMoving  = false
let isCarLampOn = true
let carImgEl = $.querySelector(".car img")
let surfaceEl = $.querySelector(".surface")
window.addEventListener("keypress",(e)=>{
    if (e.key.toLowerCase()==="s") {
        console.log("clicked");
        if (isCarMoving) {
            surfaceEl.style.animation= "none"
            carImgEl.style.animation = "none"
            isCarMoving = false
        }else{
            surfaceEl.style.animation= "moveRight 6s linear infinite"
            carImgEl.style.animation = " suspension 1s linear infinite"
            isCarMoving = true
        }
    }else if (e.key.toLowerCase()==="l") {
        if (isCarLampOn) {
            carImgEl.setAttribute("src","images/Img_05.png")
            isCarLampOn = false
        }else{
            carImgEl.setAttribute("src","images/Img_06.png")
            isCarLampOn = true
        }
    }
})