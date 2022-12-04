import dayjs from "dayjs"
import utc from "dayjs/plugin/utc.js"

dayjs.extend(utc)

console.log(dayjs.utc('2023-08-31T16:00:00.000Z').utcOffset(8).format('YYYY-MM-DD'));
