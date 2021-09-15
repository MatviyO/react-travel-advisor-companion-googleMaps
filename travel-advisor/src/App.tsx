import React, {useEffect, useState} from "react";
import {CssBaseline, Grid} from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import {getPlacesData, getWeatherData} from "./api";
import {IBooundCoord, ICoordinates} from "./core/interfaces/ICoordinates";
import {IPlace} from "./core/interfaces/IPlace";
import {IWeather} from "./core/interfaces/IWeather";

const App = () => {
    const [places, setPlaces] = useState<IPlace[]>([]);
    const [filteredPlaces, setFilteredPlaces] = useState<IPlace[]>([])
    const [coordinates, setCoordinates] = useState<ICoordinates>({lat: 0, lng: 0} as ICoordinates)
    const [bounds, setBounds] = useState<IBooundCoord>({} as IBooundCoord);
    const [childCLicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [type, setType] = useState<string>("restaurants")
    const [rating, setRating] = useState<number>(0)
    const [ weatherData ,setWeatherData] = useState<IWeather>({} as IWeather)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude})
        })
    }, [])

    useEffect(() => {
        const filteredPlaces = places.filter((place: IPlace) => Number(place.rating) > Number(rating))
        filteredPlaces?.length && setFilteredPlaces(filteredPlaces)
    }, [rating])

    useEffect(() => {
        if (bounds?.sw && bounds?.ne) {
            setIsLoading(true)

            getWeatherData(coordinates.lat, coordinates.lng)
                .then((data: any) => data && setWeatherData(data))

            getPlacesData(type, bounds.sw, bounds.ne)
                .then((res) => {
                    if (res) {
                        let {data} = res
                        if (data) {
                            setPlaces(data)
                            setFilteredPlaces([])
                        }
                        setIsLoading(false)
                    }
                })
        }
    }, [type, bounds])

    return (
        <>
            <CssBaseline/>
            <Header setCoordinates={setCoordinates}/>
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List places={filteredPlaces.length ? filteredPlaces : places} childCLicked={childCLicked} isLoading={isLoading} type={type} setType={setType}
                          rating={rating} setRating={setRating}/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map coordinates={coordinates} setCoordinates={setCoordinates} setBounds={setBounds}
                         weatherData={weatherData}
                         places={filteredPlaces.length ? filteredPlaces : places} setChildClicked={setChildClicked}/>
                </Grid>
            </Grid>
        </>
    )
}

export default App;
