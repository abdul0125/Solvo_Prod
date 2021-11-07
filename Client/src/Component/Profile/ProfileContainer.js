

import React from 'react';
import {Grid,Grow,Container} from '@material-ui/core';
import Profile from './Profile';
import TimeTable from './TimeTable'
import SidebarExpert from '../Sidebar/sidebar_expert'
import Resource from '../resource/Resource';
 



const ProfileContainer = ()=>{


    return(
        
        
            <Grid container style={{position:"relative"}}>
                <Grid item xs={4}>
                    <SidebarExpert  />
                </Grid>
                <Grid item xs={5}>
                    <Profile isTutor={true} />
                </Grid>
                <Grid item xs={3}>
                    <Resource  />
                </Grid>
                
            </Grid>
        
    
     )
        
   
}

export default ProfileContainer;


