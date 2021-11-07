import React from "react"
import { makeStyles } from "@material-ui/core"
import CustomizedInputBase from "./Search"
import { Typography } from "@material-ui/core"
import { AppBar , Toolbar  } from "@material-ui/core"
import MenuListComposition from "./simple Menu"
import PublishTwoToneIcon from '@material-ui/icons/PublishTwoTone';
import { ListItem } from "@material-ui/core"
import { IconButton } from "@material-ui/core"

const style=makeStyles(()=>({
    root:{
        border:"2px solid black",
        right:"0",
        minHeight:"75vh",
        width:"30vw",
        position:"absolute",
        borderRadius:"7px",
        backgroundColor:"rgb(0,0,0,0.9)"
    },
}))
export default function Resource()
{
    const styling=style()

    return(
        <div className={styling.root}>
            <AppBar position="static" style={{backgroundColor:"rgb(0,0,0,0.9)"}}>
            <Toolbar style={{display:"flex",justifyContent:"center"}} >
                <Typography variant="h6" >
                Share Notes
                </Typography>
              
            </Toolbar>
            </AppBar>  
            <MenuListComposition/>
            <Customized7InputBase/>
            
            <div style={{position:"absolute",bottom:'0',width:"100%",borderTop:"1px solid white",}}>
            <ListItem button style={{width:"100%",display:"flex",justifyContent:"center"}}>
           
            <IconButton>

            <Typography variant="h6" style={{color:"white",paddingTop:"4px"}}>Upload</Typography>< PublishTwoToneIcon  style={{fontSize:"xxx-large",color:"green"}}/>
            </IconButton>
            </ListItem>
            </div>
            
        </div>

    )
}