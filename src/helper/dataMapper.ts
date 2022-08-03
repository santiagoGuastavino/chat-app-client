import { ApiStatus } from '../types'

export function dataMapper (dataToMap: ApiStatus) {
  // normalize date
  const dataTime = new Date(dataToMap.time)
  const normalizedTime = dataTime.toTimeString().split(' ')[0]
  dataToMap.time = normalizedTime

  // sanitize message
  const sanitizedMessage = dataToMap.message.slice(0, 7)
  dataToMap.message = sanitizedMessage
}
