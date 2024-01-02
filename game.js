function moveBackward(){

    var snd = new Audio('audios/left-arrow.mpeg')
    snd.play();
}

function moveForward(){

    var snd = new Audio('audios/right-arrow.mpeg')
    snd.play();
}

function lastpage(){
    window.location.href = "./end.html";
}

document.addEventListener("keydown", function(event) {
    if (event.key == "ArrowLeft"){
       moveBackward();
    } 
    else if (event.key == "ArrowRight"){
       moveForward();
    }
    else if (event.key == "Enter"){
        lastpage();
    }
});