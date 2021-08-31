const moment = require('moment');

const nowTime = moment();
console.log(nowTime);

// const nowTimeUtc = moment.utc();
// console.log('nowTimeUtc : ' , nowTimeUtc);

// moment.format
const format = nowTime.format('YYYY.MM.DD');

// startOf

const startOF_year = moment().startOf('year');          // set to January 1st, 12:00 am this year
const startOF_month = moment().startOf('month');        // set to the first of this month, 12:00 am
const startOF_quarter = moment().startOf('quarter');    // set to the beginning of the current quarter, 1st day of months, 12:00 am
const startOF_week = moment().startOf('week');          // set to the first day of this week, 12:00 am
const startOF_isoWeek = moment().startOf('isoWeek');    // set to the first day of this week according to ISO 8601, 12:00 am
const startOF_day = moment().startOf('day');            // set to 12:00 am today
const startOF_date = moment().startOf('date');          // set to 12:00 am today
const startOF_hour = moment().startOf('hour');          // set to now, but with 0 mins, 0 secs, and 0 ms
const startOF_minute = moment().startOf('minute');      // set to now, but with 0 seconds and 0 milliseconds
const startOF_second = moment().startOf('second');      // same as moment().milliseconds(0);

console.log('startOF_year : ', startOF_year);
console.log('startOF_month : ', startOF_month);
console.log('startOF_quarter : ', startOF_quarter);
console.log('startOF_week : ', startOF_week);
console.log('startOF_isoWeek : ', startOF_isoWeek);
console.log('startOF_day : ', startOF_day);
console.log('startOF_date : ', startOF_date);
console.log('startOF_hour : ', startOF_hour);
console.log('startOF_minute : ', startOF_minute);
console.log('startOF_second : ', startOF_second);
