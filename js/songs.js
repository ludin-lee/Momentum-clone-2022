const playBtn = document.querySelector(".playing-song");
const playBtnIcon = document.querySelector(".playing-song i");
const song = document.querySelector("#song");

const prevBtn = document.querySelector(".prev-song");
const nextBtn = document.querySelector(".next-song");

const songList = ["1","2","3","4"];
let songNum = 1;

const songNow = song.src;
song.setAttribute("src",`songs/${songList[songNum]}.mp3`);


function playSong(){
    if(song.paused){
            playBtnIcon.classList.remove("fa-play");
            playBtnIcon.classList.add("fa-pause");
            song.play();
        }else{
            playBtnIcon.classList.remove("fa-pause");
            playBtnIcon.classList.add("fa-play");
            song.pause();
        }
}

function prevSong(){
     if(songNum===0){
       songNum = (songList.length) -1;
    }else{
        songNum -= 1;    
    }
    song.setAttribute("src",`songs/${songList[songNum]}.mp3`);
    if(song.paused){
        playBtnIcon.classList.remove("fa-play");
        playBtnIcon.classList.add("fa-pause");
    }
    song.play();
}

function nextSong(){
    if(songNum===songList.length-1){
      songNum = 0;
   }else{
       songNum +=1;    
   }
   song.setAttribute("src",`songs/${songList[songNum]}.mp3`);
   if(song.paused){
    playBtnIcon.classList.remove("fa-play");
    playBtnIcon.classList.add("fa-pause");
}
   song.play();
}




playBtn.addEventListener("click",playSong);
prevBtn.addEventListener("click",prevSong);
nextBtn.addEventListener("click",nextSong);

