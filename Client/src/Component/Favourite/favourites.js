import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
// import { border, fontSize, textAlign, typography, width } from '@material-ui/system';
import { List,ListItem,ListItemAvatar,Typography} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import Carditem from './cardFavourites';

const useStyles = makeStyles((theme) => ({
  Main: {

    paddingBottom: "10px",
    border: "2px",
    background:"white",
    padding:"1em 1em",
    paddingTop:0,
    marginTop:"1em",
    borderRadius:"2px",
    overflow:"scroll",
    maxHeight:"620px",
    boxShadow:"1px 2px 17px -1px rgba(15,13,13,1)",
  },
  card: {
    border: "2px",
    borderRadius: "4px",
    margin: "5px",
    width: "100%",
    heigth: "80px",
    display: "flex",
    flexWrap: "wrap",
    paddingLeft: "10px",
    marginLeft: "5px",
  
  },
  cardItem: {
    display: "inline",
    heigth: "80px",
  },
  Image: {
    paddingTop: "5px",
    width: "auto",
    paddingRight: "10px",
    display: "inline-block",
    // marginRight: "10px",
    fontSize: "20px",
  },
  
  Image2: {
    width: "auto",
    float: "right",
    display: "inline-block",
    // marginRight: "10px",
    fontSize: "20px",
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },

}))

const  Favourites =  () => {
    const classes = useStyles();
    return (
        <>
            <div className= {classes.Main}>
                <div style={{height:"20px"}}></div>
                <Carditem/>
                <div className={classes.card}>
                    <div className={classes.cardItem}>
                    <List style={ {marginBottom: "2"}}>
                         
                  <ListItem style={{overflow:"hidden",overflowX:"auto"}}>
                    <div>
                    <ListItemAvatar style={{position:"absolute",top:"8px",display:"inline"}}>
                    <div style={{display:"inline"}}>
                    <Avatar alt="Profile Picture" className={classes.small} src="https://image.shutterstock.com/image-photo/picture-cheerful-businessman-sitting-office-260nw-568326445.jpg" />
                    </div>
                    <div style={{display:"inline",position:"absolute",bottom:"2px",left:"50px",width:"300px"}}>
                    <Typography variant="h5" style={{color:"#425af5", fontWeight: 600}}>Abdul Ahad</Typography>
                    </div>
                    </ListItemAvatar>
                    </div>
                    <div style={{marginLeft:"44px",marginTop:"20px",}}>
                    <br/>
                    <div style={{display:"inline", marginRight: "130px",color:"green",fontWeight:700, fontSize:"18px"}}>
                        Thrust Area:
                    </div>
                    <div style={{display:"inline",color:"green",fontWeight:700, fontSize:"18px"}}>
                    Rating: 4.5
                        <StarIcon style={{PaddingTop: "3px"}} />
                    </div>
                    </div>
                   
                  </ListItem>
                  <div style={{marginTop: "-5px",marginLeft: "50px", color: "#164dab",fontWeight:500,}}>
                       <ul>
                        <li >Artificial intelligence</li>
                        <li>Python</li>
                        <li>MATLAB</li>
                        </ul>
                    </div>
            </List>
                    </div>
                </div>
               
                <div className={classes.card}>
                    <div className={classes.cardItem}>
                    <List style={ {marginBottom: "2"}}>
                         
                  <ListItem style={{overflow:"hidden",overflowX:"auto"}}>
                    <div>
                    <ListItemAvatar style={{position:"absolute",top:"8px",display:"inline"}}>
                    <div style={{display:"inline"}}>
                    <Avatar alt="Profile Picture" className={classes.small} src="https://image.shutterstock.com/image-photo/picture-cheerful-businessman-sitting-office-260nw-568326445.jpg" />
                    </div>
                    <div style={{display:"inline",position:"absolute",bottom:"0px",left:"60px",width:"300px"}}>
                    <Typography variant="h5" style={{color:"#425af5", fontWeight: 600}}>Dhruv Maheshwari</Typography>
                    </div>
                    </ListItemAvatar>
                    </div>
                    <div style={{marginLeft:"44px",marginTop:"20px",}}>
                    <br/>
                    <div style={{display:"inline", marginRight: "130px",color:"green",fontWeight:700, fontSize:"18px"}}>
                        Thrust Area:
                    </div>
                    <div style={{display:"inline",color:"green",fontWeight:700, fontSize:"18px"}}>
                        Rating: 4.5
                        <StarIcon style={{PaddingTop: "3px"}} />
                        
                       
                    </div>
                    </div>
                   
                  </ListItem>
                  <div style={{marginTop: "-5px",marginLeft: "50px", color: "#164dab",fontWeight:500,}}>
                       <ul>
                        <li >NodeJS</li>
                        <li>Computer Networks</li>
                        <li>JavaScript</li>
                        </ul>
                    </div>
            </List>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Favourites;
