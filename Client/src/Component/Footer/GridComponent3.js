import React from "react"
import {Grid ,Typography} from '@material-ui/core';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

export default function GridCompnent3(classes)
{
    classes=classes.classes
    return(
        <Grid item  xs={12} sm={6} md={3}>
                <div className={classes.card}>
                  <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Address
                    </Typography>
                    <Typography variant="body1" paragraph>Nadeem Tarin Hall , Aligarh , UP 202002</Typography>
                    <Typography variant="body1"><ContactPhoneIcon fontSize="large" viewBox="0 0 24 24"/> <br/> +91 75058 67107</Typography>
                    </div>
                  </div>
              </Grid>
    )
}