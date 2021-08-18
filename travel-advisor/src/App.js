import React from "react";
import {CssBaseline, Grid} from "@material-ui/core";
import Header from "./components/Header/Header";
const App = () => {
    return (
        <>
            <CssBaseline />
            <Header/>
            <Grid container spacing={3} style={{width: '100%'}}>

            </Grid>
        </>
    )
}

export default App;
