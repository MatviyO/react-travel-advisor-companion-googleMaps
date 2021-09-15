import React, {FC, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import useStyles from './style';
import {Paper, Typography, useMediaQuery} from "@material-ui/core";
import {IBooundCoord, ICoordinates} from "../../core/interfaces/ICoordinates";
import {Rating} from "@material-ui/lab";
import {IPlace} from "../../core/interfaces/IPlace";
import {IWeather} from "../../core/interfaces/IWeather";

interface Props {
    coordinates: ICoordinates;
    setCoordinates: (data: ICoordinates) => void
    setBounds: (data: IBooundCoord) => void
    places: IPlace[]
    setChildClicked: (data: any) => void
    weatherData: IWeather
}

const Map: FC<Props> = ({setCoordinates, setBounds, coordinates, places, setChildClicked, weatherData}) => {
    const classes = useStyles()
    const matches  = useMediaQuery('(min-width: 600px)')
    console.log(weatherData)

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: `${process.env.REACT_APP_GOOGLE_MAP_KEY}`}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{
                    disableDefaultUI: true, zoomControl: true
                }}
                onChange={(e) => {
                    setCoordinates({lat: e.center.lat, lng: e.center.lng})
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
                onChildClick={(child) => {setChildClicked(child)}}
            >
                {places?.map((place: IPlace, i: React.Key) => (
                    //@ts-ignore
                    <div className={classes.markerContainer} lat={Number(place.latitude)} lng={Number(place.longitude)}
                         key={i}>
                        { !matches ? (
                            <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                        ) : (
                            <Paper elevation={3} className={classes.paper}>
                                <Typography  variant="subtitle2" gutterBottom>
                                    {place.name}
                                </Typography>
                                <img src={ place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                     className={classes.pointer} alt={place.name}/>
                                <Rating size="small" value={Number(place.rating)} readOnly />
                            </Paper>
                        )}

                    </div>
                ))}

                {weatherData?.weather?.map((data: {[key: string]: any}, i: number) => (
                    //@ts-ignore
                    <div key={i} lat={weatherData.coord.lat} lng={weatherData.coord.lon} style={{marginLeft: 60}}>
                        <img src={`https://openweathermap.org/img/w/${data?.icon}.png`} height="120px" />
                    </div>
                ))}

            </GoogleMapReact>

        </div>
    )
}


export default Map;
