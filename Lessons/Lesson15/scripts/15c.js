import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
let today = dayjs();
let monthBefore = today.subtract(1,'month');
export let monthBeforeString = monthBefore.format('MMMM D');
document.querySelector('.monthBefore').innerHTML += monthBeforeString;
