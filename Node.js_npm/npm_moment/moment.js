const moment = require('moment');

const nowTime = moment();
console.log(nowTime);

// const nowTimeUtc = moment.utc();
// console.log('nowTimeUtc : ' , nowTimeUtc);

// moment.format
const format = nowTime.format('YYYY.MM.DD');

// startOf()
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

console.log('――――――――――― start of() ――――――――――')
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

// endOf()
const endOF_year = moment().endOf('year');          // set to December 31st, 11:59 pm this year
const endOF_month = moment().endOf('month');        // set to the last of this month, 11:59 pm
const endOF_quarter = moment().endOf('quarter');    // set to the ending of the current quarter, last day of months, 11:59 pm
const endOF_week = moment().endOf('week');          // set to the last day of this week, 11:59 pm
const endOF_isoWeek = moment().endOf('isoWeek');    // set to the last day of this week according to ISO 8601, 11:59 pm
const endOF_day = moment().endOf('day');            // set to 11:59 pm today
const endOF_date = moment().endOf('date');          // set to 11:59 pm today
const endOF_hour = moment().endOf('hour');          // set to now, but with 0 mins, 0 secs, and 0 ms
const endOF_minute = moment().endOf('minute');      // set to now, but with 0 seconds and 0 milliseconds
const endOF_second = moment().endOf('second');      // same as moment().milliseconds(0);

console.log('――――――――――― end of() ――――――――――')
console.log('endOF_year : ', endOF_year);
console.log('endOF_month : ', endOF_month);
console.log('endOF_quarter : ', endOF_quarter);
console.log('endOF_week : ', endOF_week);
console.log('endOF_isoWeek : ', endOF_isoWeek);
console.log('endOF_day : ', endOF_day);
console.log('endOF_date : ', endOF_date);
console.log('endOF_hour : ', endOF_hour);
console.log('endOF_minute : ', endOF_minute);
console.log('endOF_second : ', endOF_second);


// TODO : momnet.add(Number, String) Study