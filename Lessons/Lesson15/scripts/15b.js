import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
let today = dayjs();
let month = today.add(1,'month');
export let monthAfterString = month.format('MMMM D');
document.querySelector('.monthAfter').innerHTML += monthAfterString;
