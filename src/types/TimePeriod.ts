export interface Event {
  year: number
  text: string
}

export interface TimePeriod {
  title: string
  from: number
  to: number
  events: Event[]
}
