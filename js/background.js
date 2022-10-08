const backgroudImg = [
    "background/1.mp4",
    "background/2.mp4",
    "background/3.mp4",
    "background/4.mp4",
    "background/5.mp4",
]


const wallpaperIndex = document.querySelector(".wallpaper_index video");
const wallpaperSrcAdd = document.createElement("source");
const wallpaperVideo = wallpaperIndex.appendChild(wallpaperSrcAdd);

wallpaperVideo.setAttribute("src",`${backgroudImg[Math.floor(Math.random()*backgroudImg.length)]}`);
