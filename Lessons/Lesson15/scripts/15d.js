import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
let today = dayjs();
export let dayOfWeek = today.format('dddd');
document.querySelector('.dayOfWeek').innerHTML += dayOfWeek;
