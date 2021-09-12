import React, {useEffect, useState} from "react";
import {CssBaseline, Grid} from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import {getPlacesData} from "./api";
import {IBooundCoord, ICoordinates} from "./core/interfaces/ICoordinates";

const App = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState<ICoordinates>({lat: 0, lng: 0} as ICoordinates)
    const [bounds, setBounds] = useState<IBooundCoord>({} as IBooundCoord);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude})
        })
    }, [])

    useEffect(() => {
        getPlacesData(bounds.sw, bounds.ne)
            .then((res) => {
                if (res) {
                    let {data } = res
                    data && setPlaces(data)
                }
            })
    }, [coordinates, bounds])

    return (
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List places={places}/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map coordinates={coordinates} setCoordinates={setCoordinates} setBounds={setBounds}/>
                </Grid>
            </Grid>
        </>
    )
}

export default App;
