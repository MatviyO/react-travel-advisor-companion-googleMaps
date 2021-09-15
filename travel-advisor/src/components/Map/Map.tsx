import React, {FC, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import useStyles from './style';
import {Paper, Typography, useMediaQuery} from "@material-ui/core";
import {ICoordinates} from "../../core/interfaces/ICoordinates";
import {Rating} from "@material-ui/lab";

interface Props {
    coordinates: ICoordinates;
    setCoordinates: (data: any) => void
    setBounds: (data: any) => void
    places: any
    setChildClicked: any
    weatherData: any
}

const Map: FC<Props> = ({setCoordinates, setBounds, coordinates, places, setChildClicked, weatherData}) => {
    const classes = useStyles()
    const matches  = useMediaQuery('(min-width: 600px)')

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
                {places?.map((place: any, i: React.Key) => (
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

                {weatherData?.list?.length && weatherData.list.map((data: any, i: number) => (
                    //@ts-ignore
                    <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                        <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" />
                    </div>
                ))}

            </GoogleMapReact>

        </div>
    )
}


export default Map;
