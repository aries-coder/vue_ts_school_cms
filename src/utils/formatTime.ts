import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)

export const formatUtcTime = (utcStr: string, formatStr = 'YYYY-MM-DD') => {
  return dayjs.utc(utcStr).utcOffset(8).format(formatStr)
}
