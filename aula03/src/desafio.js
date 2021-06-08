let differenceInDays = require('date-fns/differenceInDays')
let differenceInMonths = require('date-fns/differenceInMonths')
let moment = require('moment');

const now = moment(new Date());
const past = moment("2020-05-15");
const duration = moment.duration(now.diff(past));

const days = Math.round(duration.asDays());

console.log('A diferença de dias entre as datas informadas é de ' + days + '  dias')

const result = differenceInDays (
    new Date(),
    new Date("2020, 5, 15")
)
const resultMonths = differenceInMonths(new Date(2021, 05, 15), new Date(2020, 05, 15))

console.log(result)
console.log(resultMonths)