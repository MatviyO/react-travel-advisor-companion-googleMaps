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
                'x-rapidapi-key': '5df345e1fcmshf363a924bbc6e6ap161e90jsn86d631e1a1f0'
            }
        });
        return data;

    } catch (e) {
        console.log(e)
    }
}
