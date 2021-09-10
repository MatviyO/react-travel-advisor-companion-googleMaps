import React, {FC} from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from './style';
import {Card, CardMedia} from "@material-ui/core";

interface Props {
    place: { name: string, photo: any}
}

const PlaceDetails: FC<Props> = ({place}) =>  {
    const classes = useStyles()
    return (
        <Card elevation={6} >
            <CardMedia
                title={place.name}
                style={{height: 350}} image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
            />
        </Card>
    )
}

export default PlaceDetails;
