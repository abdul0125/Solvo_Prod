import React from "react"
import {Grid ,Typography,Link} from '@material-ui/core';


export default function GridComponent2(classes)
{
    classes=classes.classes

    return(
        <Grid item  xs={12} sm={6} md={3}>
                <div className={classes.card}>
                  <div className={classes.cardContent}>
                    <br/>
                    <br/>                   
                    <Typography gutterBottom variant="h5" component="h2">
                      Important Links
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <Link color='inherit' href='#' className={classes.Links}>To be added</Link>
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <Link color='inherit' href='#' className={classes.Links}>To be added</Link>
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <Link color='inherit' href='#' className={classes.Links}>To be added</Link>
                    </Typography>
                    <Typography variant="body1" paragraph>
                     <Link color='inherit' href='#' className={classes.Links}> To be added</Link>
                    </Typography>
                    
                    </div>
                  </div>
              </Grid>
    )
}