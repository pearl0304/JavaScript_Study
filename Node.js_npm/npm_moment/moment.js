const moment = require('moment');

const nowTime = moment();
console.log(nowTime);

const nowTimeUtc = moment.utc();
console.log('nowTimeUtc : ' , nowTimeUtc);



