import { makeStyles } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
// import { border, fontSize, textAlign, typography, width } from '@material-ui/system';
import { List,ListItem,ListItemAvatar,Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
    card: {
        border: "2px",
        borderRadius: "4px",
        margin:"5px",
        heigth: "80px",
        display: "flex",
        flexWrap: 'wrap',
        justifyContent:"center",
        
        border:"1px solid rgba(170, 166, 166, 0.88)",
        position:"relative",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"1em 2em",
        transition:"0.2s ease-in-out",
        zIndex:"10",


        "&:hover":{
          cursor:"pointer",
          transform:"scale(1.01)",
          background:"rgba(218, 218, 218, 1)",
          border:"2px solid rgba(56, 135, 40, 0.86)",
        }
        
    },
    cardItem: {
        display: "inline",
        width:"70%",
        flex:1,
        marginLeft:"1em"
        
    },
    Image: {
        
        paddingTop: "5px",
        width: "auto",
        paddingRight: "10px",
        display: "inline-block",
        // marginRight: "10px",
        fontSize: "20px"
    },
    Image1: {
        width: "auto",
         float: "center",
        display: "inline-block",
        // marginRight: "10px",
        fontSize: "25px",
        textAlign: "top"
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

const Carditem = () => {
    const classes = useStyles();
    return (
    <>
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
                    <Typography variant="h5" style={{color:"#425af5", fontWeight: 600}}>Mohd. Naved Khan</Typography>
                    </div>
                    </ListItemAvatar>
                    </div>
                    <div style={{marginLeft:"44px",marginTop:"20px",}}>
                    <br/>
                    <div style={{display:"inline", marginRight: "130px",color:"green",fontWeight:700, fontSize:"18px"}}>
                        Thrust Area:
                    </div>
                    <div style={{display:"inline",color:"green",fontWeight:700, fontSize:"18px"}}>
                    Rating: 5
                        <StarIcon style={{PaddingTop: "3px"}} />
                    </div>
                    </div>
                   
                  </ListItem>
                  <div style={{marginTop: "-5px",marginLeft: "50px", color: "#164dab",fontWeight:500,}}>
                       <ul>
                        <li >ReactJS</li>
                        <li>C++</li>
                        <li>Neural Networks</li>
                        </ul>
                    </div>
            </List>
                    </div>
                </div>
    </>
    )
}

export default Carditem;