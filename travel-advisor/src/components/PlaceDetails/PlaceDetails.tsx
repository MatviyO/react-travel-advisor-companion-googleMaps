import React, {FC} from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from './style';

interface Props {
    place: { name: string}
}


const PlaceDetails: FC<Props> = ({place}) =>  {
    const classes = useStyles()
    return (
        <h1>{place.name}</h1>
    )
}

export default PlaceDetails;
