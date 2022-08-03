import { useState, useEffect } from 'react'

function toMiliseconds (seconds: number) {
  const miliseconds = seconds.valueOf() * 1000
  return miliseconds
}

export function useTimeoutValue (value: number) {
  const [valueInMiliseconds, setValueInMiliseconds] = useState<number>()
  useEffect(() => {
    setValueInMiliseconds(toMiliseconds(value))
  }, [value])

  return valueInMiliseconds
}
