export interface ApiStatus {
  success: boolean | undefined
  message: string
  hostname: string
  time: string
  responseStatus?: number
  responseMessage?: string
}
