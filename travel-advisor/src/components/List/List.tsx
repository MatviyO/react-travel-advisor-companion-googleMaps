import React, {createRef, FC, useEffect, useState} from 'react';
import useStyles from './style'
import {FormControl, Typography, InputLabel, Select, MenuItem, Grid, CircularProgress} from "@material-ui/core";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

interface Props {
    places: Array<any>
    childCLicked: any
    isLoading: boolean
    type: any
    setType: any
    rating: any
    setRating: any
}
const List: FC<Props> = ({places, childCLicked, isLoading, type, setType, rating, setRating}) =>  {
    const classes = useStyles()

    const [elRefs, setElRefs] = useState<any>([]);

    useEffect(() => {
        const refs = places?.length && Array(places?.length).fill(undefined).map((_: any, index: string | number) => elRefs[index] || createRef());
        console.log(refs)
        setElRefs(refs)
    }, [places])

    return (
        <div className={classes.container}>
            <Typography variant="h4">Restaurants, Hotels, Attractions around you</Typography>

            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem" />
                </div>
            ) : (<>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={({target}) => setType(target.value as string)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Ratiing</InputLabel>
                <Select value={rating} onChange={({target}) => setRating(target.value as string)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places && places?.map((place, index) => (
                    <Grid  item key={index} xs={12}>
                        <PlaceDetails place={place} selected={Number(childCLicked) === index} refProp={elRefs[index]}/>
                    </Grid>
                ))}
            </Grid> </>)
            }
        </div>
    )
}

export default List;
