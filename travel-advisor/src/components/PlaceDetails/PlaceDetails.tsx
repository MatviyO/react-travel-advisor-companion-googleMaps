import React, {FC} from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

interface Props {
    place: { name: string}
}

const PlaceDetails: FC<Props> = ({place}) =>  {
    return (
        <h1>{place.name}</h1>
    )
}

export default PlaceDetails;
