import throttle from "lodash.throttle";
import Player from "@vimeo/player";

const videoPlayer = document.querySelector("#vimeo-player");
const LOCALSTORAGE_KEY = "videoplayer-current-time";

const player = new Player(videoPlayer);

const seconds = localStorage.getItem(LOCALSTORAGE_KEY);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({seconds}){
    localStorage.setItem(LOCALSTORAGE_KEY, seconds);
}

player.setCurrentTime(seconds).
then((seconds) => {
    console.log(seconds)
}).catch((error) => {
    console.log(error.name, "- Видео не еще воспроизведено или уже завершилось!") 
});

console.log(player);