import React from 'react';
import GoogleMapReact from 'google-map-react';
import Rating from '@material-ui/lab';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import useStyles from './style';
import {useMediaQuery} from "@material-ui/core";


const Map = () => {
    const classes = useStyles()
    const isMobile = useMediaQuery('(mi n-width: 600px)')
    const coordinates = {lat: 0, lng: 0}
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyB2Qsx7uktebp44R3IEM25hb08NnHybvHI'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                // options={''}
                // onChange={''}
                // onChildClick={''}
            >

            </GoogleMapReact>

        </div>
    )
}



export default Map;
