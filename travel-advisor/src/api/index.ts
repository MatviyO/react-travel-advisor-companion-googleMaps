import axios from "axios";
import {ICoordinates} from "../core/interfaces/ICoordinates";

export const getPlacesData = async (type: string, sw: ICoordinates, ne: ICoordinates) => {
    try {
        const {data: data} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key':  process.env.REACT_APP_RAPIDAPI_WEATHER_KEY
            }
        });
        return data;

    } catch (e) {
        console.log(e)
    }
}

export const getWeatherData = async (lat: number, lng: number) => {
    try {

        const {data} = await axios.get('https://community-open-weather-map.p.rapidapi.com/weather', {
            params: {lon: lng, lat: lat},
            headers: {
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_WEATHER_KEY
            }
        });
        return data;

    } catch (e) {
        console.log(e)
    }
}
