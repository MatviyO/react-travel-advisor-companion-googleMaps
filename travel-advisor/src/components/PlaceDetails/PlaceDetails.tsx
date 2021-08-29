import React, {FC} from 'react';

interface Props {
    place: { name: string}
}

const PlaceDetails: FC<Props> = ({place}) =>  {
    return (
        <h1>{place.name}</h1>
    )
}

export default PlaceDetails;
