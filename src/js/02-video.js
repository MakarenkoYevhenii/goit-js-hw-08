import Player from '@vimeo/player';
import { set, throttle } from 'lodash';

const minuteVideoplayer = document.querySelector("#vimeo-player")
const player = new Vimeo.Player(minuteVideoplayer)
console.dir(minuteVideoplayer);

const onPlay = function(data) {
    console.log(data.seconds);
    const currentTime = data.seconds
    localStorage.setItem("videoplayer-current-time", currentTime)    
};
const throtlleFunction = throttle(onPlay,1000)

 player.on('timeupdate', throtlleFunction );
 if (localStorage.getItem("videoplayer-current-time")){
     player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
}
