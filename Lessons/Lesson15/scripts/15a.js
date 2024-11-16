import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {monthAfterString} from './15b.js';
import { monthBeforeString } from './15c.js';
import { dayOfWeek } from './15d.js';
import isSatSun from './15f.js';
let today = dayjs();
let day = today.add(5,'days');
let dayString = day.format('MMMM D');
document.querySelector('.day').innerHTML += dayString;
//  console.log(dayString);
// console.log(monthBeforeString);
// 5e
// let date = dayjs();
// console.log(date.format('dddd, MMMM D'));
// console.log(isWeekend(date));
// let anotherDate = date.add(3,'days');
// console.log(anotherDate.format('dddd, MMMM D'));
// console.log(isWeekend(anotherDate));
 
 let date = dayjs();
 console.log(date.format('dddd, MMMM D'));
 console.log(isSatSun(date));
 let anotherDate = date.add(3,'days');
 console.log(anotherDate.format('dddd, MMMM D'));
 console.log(isSatSun(anotherDate));