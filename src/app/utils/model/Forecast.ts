export interface Upcoming {
  list: Forecast[],
}

export interface Current {
  forecast: Forecast
}


interface Forecast {
  dt: number,
  main: {
    temp: number
  },
  weather: Weather[]
}

interface Weather {
  id: number,
  main: string,
  description: string,
  icon: string
}