import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const currentTime = localStorage.getItem('playing-current-time');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onTimeupdate = seconds => {
  localStorage.setItem('playing-current-time', seconds);
};

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    onTimeupdate(seconds);
  }, 1000)
);
if (currentTime) {
  player.setCurrentTime(currentTime);
}
