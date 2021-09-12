import React, {FC} from 'react';
import GoogleMapReact from 'google-map-react';
import Rating from '@material-ui/lab';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import useStyles from './style';
import {useMediaQuery} from "@material-ui/core";
import {ICoordinates} from "../../core/interfaces/ICoordinates";

interface Props {
    coordinates: ICoordinates;
    setCoordinates: (data: any) => void
    setBounds: (data: any) => void
    places: any
}

const Map: FC<Props> = ({setCoordinates, setBounds, coordinates,places}) => {
    const classes = useStyles()
    const isMobile = useMediaQuery('(mi n-width: 600px)')

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyB2Qsx7uktebp44R3IEM25hb08NnHybvHI'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                // options={''}
                onChange={(e) => {
                    setCoordinates({lat: e.center.lat, lng: e.center.lng})
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
                // onChildClick={''}
            >

            </GoogleMapReact>

        </div>
    )
}



export default Map;
