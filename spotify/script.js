console.log("Welcome to spotify")
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogressbar=document.getElementById('progressbar');
let gif=document.getElementById('gif');

let songs=[
    { songName:"salam",filepath:"song/1.mp3"},
    { songName:"salam",filepath:"song/2.mp3"},
    { songName:"salam",filepath:"song/3.mp3"},
    { songName:"salam",filepath:"song/4.mp3"},
    { songName:"salam",filepath:"song/5.mp3"},
]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=(myprogressbar.value * audioElement.duration)/100;
})
