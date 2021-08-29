import React, {useState} from 'react';
import useStyles from './style'
import {FormControl, Typography, InputLabel, Select, MenuItem, Grid, Card} from "@material-ui/core";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = () =>  {
    const classes = useStyles()
    const [type, setType] = useState<string>("restaurants")
    const [rating, setRating] = useState<string>("restaurants")
    const places = [
        { name: 'Cool Place'},
        { name: 'Best Beer'},
        { name: 'Steak'}
    ]
    return (
        <div className={classes.container}>
            <Typography variant="h4">Restaurants, Hotels, Attractions around you</Typography>
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
                {places?.map((place, index) => (
                    <Grid item key={index} xs={12}>
                        <PlaceDetails place={place}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default List;
