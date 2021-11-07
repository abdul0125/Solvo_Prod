

import React from 'react';
import {Grid,Grow,Container} from '@material-ui/core';
import Profile from './Profile';
import TimeTable from './TimeTable'
import Sidebar_expert_search from '../Sidebar/sidebar_expert_search';
import Resource from '../resource/Resource';
 



const ProfileContainerSearch = ()=>{


    return(
        
            <Grid container style={{position:"relative"}}>
                <Grid item xs={4}>
                    <Sidebar_expert_search  />
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

export default ProfileContainerSearch;


