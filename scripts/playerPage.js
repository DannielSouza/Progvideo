let video = document.getElementById("video1")

function voltar(){
    video.currentTime -= 15

}

function avancar(){
    video.currentTime += 15
    
}

function play(){
    video.play()
    
}



document.querySelector('.btnPlay').addEventListener('click', playVideo);
document.querySelector('.btnPause').addEventListener('click', pauseVideo);

function playVideo(){
    video.play();
    document.querySelector('.btnPause').style.display = 'inline-block';
    document.querySelector('.btnPlay').style.display = 'none';
}

function pauseVideo(){
    video.pause();
    document.querySelector('.btnPause').style.display = 'none';
    document.querySelector('.btnPlay').style.display = 'inline-block';
}