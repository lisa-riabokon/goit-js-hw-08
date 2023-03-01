// npm install @vimeo/player
import Player from '@vimeo/player';
// npm i lodash.throttle
import throttle from 'lodash.throttle';

// змінна, ключ до сховища
const STORAGE_PLAYER_KEY = 'videoplayer-current-time';

// Ініціалізую плеєр
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Зберігаю час відтворення у локальне сховище
const onTimeupdate = function (evt) {
  localStorage.setItem(STORAGE_PLAYER_KEY, evt.seconds);
};

// використовую метод on(), відстежую timeupdate
player.on('timeupdate', throttle(onTimeupdate, 1000));

//  методо setCurrentTime(),щоб після перезавантаженя зберігався час відтворення. Беремо час з сховища, якщо там пусто - поверне 0
player.setCurrentTime(localStorage.getItem(STORAGE_PLAYER_KEY) || 0);

console.log(localStorage);
