import React, {FC, useState} from 'react';
import {AppBar, Box, InputBase, Toolbar, Typography} from "@material-ui/core";
import {Autocomplete} from "@react-google-maps/api";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from './style'
interface Props {
    setCoordinates: any
}
const Header: FC<Props> = ({setCoordinates}) => {
    const classes = useStyles()
    const [autocomplete, setAutoComplete] = useState<any>(null)

    const onLoad = (autoC: any) => {
       setAutoComplete(autoC)
    }

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        setCoordinates({lat, lng})
    }

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                    <Typography variant="h5" className={classes.title}>
                        Travel Advisor
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase placeholder="Search ..." classes={{root: classes.inputRoot, input: classes.inputInput}} />
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    )
};

export default Header;
