export interface IWeather {
    base: string
    clouds: { [ key: string]: any}
    cod: number
    coord: { [ key: string]: any}
    dt: number
    id: number
    main: { [ key: string]: any}
    name: string
    sys: { [ key: string]: any}
    timezone: number
    visibility: number
    weather: [{ [ key: string]: any}]
    wind: {[key: string]: any}
}
