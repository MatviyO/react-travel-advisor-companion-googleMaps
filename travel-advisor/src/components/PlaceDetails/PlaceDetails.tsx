import React, {FC} from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from './style';
import {Box, Card, CardContent, CardMedia, Typography} from "@material-ui/core";

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
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography  variant="subtitle1">Price</Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default PlaceDetails;
