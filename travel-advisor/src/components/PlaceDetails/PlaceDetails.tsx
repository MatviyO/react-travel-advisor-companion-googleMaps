import React, {FC} from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from './style';
import {Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Typography} from "@material-ui/core";

interface Props {
    place: { name: string, photo: any, price_level: string, ranking: string, awards: any, cuisine: any, address: any, phone: string, web_url: string, website: string, rating: any, num_reviews: any}
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
                    <Rating size="small" value={Number(place.rating)} readOnly />
                    <Typography gutterBottom variant="subtitle1">out of {place.num_reviews}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography  variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
                </Box>

                <Box display="flex" justifyContent="space-between">
                    <Typography  variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                </Box>
                {place?.awards?.map((award: any) => (
                    <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
                        <img src={award.images.small} alt={award.display_name}/>
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                ))}

                {place?.cuisine?.map(({name}: any) => (
                   <Chip key={name} label={name} size="small" className={classes.chip} />
                ))}

                {place?.address && (
                    <Typography gutterBottom variant={"subtitle2"} color={"textSecondary"} className={classes.subtitle} >
                        <LocationOnIcon/> {place.address}
                    </Typography>

                )}

                {place?.phone && (
                    <Typography gutterBottom variant={"subtitle2"} color={"textSecondary"} className={classes.spacing} >
                        <PhoneIcon/> {place.phone}
                    </Typography>

                )}
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>Trip Advisor</Button>
                    <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>Website</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default PlaceDetails;
