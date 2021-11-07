import {React,useState} from "react"
import { Grid,Typography,Button} from "@material-ui/core"
import Collapse from '@material-ui/core/Collapse';
import Image from "./testing.jpeg"
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import { makeStyles } from '@material-ui/core/styles';
import SimpleMenu from "./SimpleMenu";

  
const forgotten=makeStyles(() => ({
    component:{padding:"1%",
           
            opacity:"75%",
            margin:"2px",height:"max-content",
            marginRight:"1%",
            borderRadius:"7px",
            backgroundColor:"white",
            marginBottom:"6px"}
}))

export default function Profile()
{
    const aajao=forgotten()
    const [display,setValue]=useState(false)
    const[plan,setPlan]=useState(false)
    const[week,setWeek]=useState(false)
    const[month,setMonth]=useState(false)
    const[year,setYear]=useState(false)
    return(
        <>
        <div style={{display:"flex-inline",marginRight:"5px",marginLeft:"35%",marginTop:"2%"}}>
        <Button variant="outlined" style={{}} color="primary" aria-label="expand row" size="medium" onClick={()=>setValue(!display)}>About</Button>
        <Button variant="outlined" style={{}} color="primary" aria-label="expand row" size="medium" onClick={()=>setValue(!display)}>Time Table</Button>
        <Button variant="outlined" style={{}} color="primary" aria-label="expand row" size="medium" onClick={()=>setPlan(!plan)}>Plans</Button>
  
        </div>
        <Collapse in={display} timeout="auto" unmountOnExit style={{transitionDuration:"3ms"}}>
        <div style={{
        overflow:"hidden",
        overflowX:"auto",
        border:"0px solid",
        marginLeft:"35%",
        display:"flex",
        // backgroundColor:"#e1e3e6",
        borderRadius:"7px",
        backgroundImage:`url(${Image})`,
        // opacity: 0.5,
        backgroundSize: "cover",
        marginRight:"2%",
        padding:"1%",
        backgroundPosition: 'center',
    height:'auto'}}
        >
                <Grid container direction="row">
                    <Grid item xs={12} sm={12} md={12} >
                        <div className={aajao.component}><Typography style={{fontSize:"x-large",fontFamily:"cursive", backgroundColor: "rgb(89 178 219)",
                       width:"max-content",
                        color: "white",
                        paddingLeft: "8px",
                        borderRadius: "10px",
                            border:"0px solid",}}>Expertise</Typography>
                        <ul style={{paddingLeft:"10px",marginTop:"6px"}}>
                       <li> <Typography style={{fontSize:"large",fontFamily:"cursive",color:"black"}}>To be added here</Typography></li>
                       <li> <Typography style={{fontSize:"large",fontFamily:"cursive",color:"black"}}>To be added here</Typography></li>
                       <li> <Typography style={{fontSize:"large",fontFamily:"cursive",color:"black"}}>To be added here</Typography></li>
                        <li><Typography style={{fontSize:"large",fontFamily:"cursive",color:"black"}}>To be added here</Typography></li>
                        <li><Typography style={{fontSize:"large",fontFamily:"cursive",color:"black"}}>To be added here</Typography></li>
                        </ul>
                        </div>
                        <Grid container direction="row">
                            <Grid item xs={12} sm={12} md={5}
                            className={aajao.component}
                             style={{width:"48%"}}>
                            <Typography style={{fontSize:"x-large",fontFamily:"cursive", backgroundColor: "rgb(89 178 219)",
                       width:"max-content",
                        color: "white",
                        paddingLeft: "8px",
                        borderRadius: "10px",
                            border:"0px solid",}}>Rating(1-5)</Typography>
                            <StarBorderOutlinedIcon />
                            <StarBorderOutlinedIcon />
                            <StarBorderOutlinedIcon />
                            <StarBorderOutlinedIcon />
                            <StarBorderOutlinedIcon />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} className={aajao.component} style={{width:"49%"}}>

                            <Typography style={{fontSize:"x-large",fontFamily:"cursive", backgroundColor: "rgb(89 178 219)",
                       width:"max-content",
                        color: "white",
                        paddingLeft: "8px",
                        borderRadius: "10px",
                            border:"0px solid",}}>Rates $</Typography>
                            <Typography style={{fontSize:"large",fontFamily:"cursive",color:"black"}}>To be added here</Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction="row">
                            <Grid item xs={12} sm={12} md={5} className={aajao.component} style={{width:"48%"}}>
                            <Typography style={{fontSize:"x-large",fontFamily:"cursive", backgroundColor: "rgb(89 178 219)",
                       width:"max-content",
                        color: "white",
                        paddingLeft: "8px",
                        borderRadius: "10px",
                            border:"0px solid",}}>No. of Questions Answered</Typography>
                           <Typography style={{fontSize:"large",fontFamily:"cursive",color:"black"}}>To be added here</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} className={aajao.component} style={{width:"49%"}
                                
                            }>
                            <Typography style={{fontSize:"x-large",fontFamily:"cursive", backgroundColor: "rgb(89 178 219)",
                       width:"max-content",
                        color: "white",
                        paddingLeft: "8px",
                        borderRadius: "10px",
                            border:"0px solid",}}>No. of Hours Taught</Typography>
                            <Typography style={{fontSize:"large",fontFamily:"cursive",color:"black"}}>To be added here</Typography>
                            </Grid>
                        </Grid>
                        <div className={aajao.component}><Typography style={{fontSize:"x-large",fontFamily:"cursive", backgroundColor: "rgb(89 178 219)",
                       width:"max-content",
                        color: "white",
                        paddingLeft: "8px",
                        borderRadius: "10px",
                        border:"0px solid",}}>Experience</Typography>
                        <Typography style={{fontSize:"large",fontFamily:"cursive",color:"black"}}>To be added here</Typography>
                            </div>
                        <div className={aajao.component}><Typography style={{fontSize:"x-large",fontFamily:"cursive", backgroundColor: "rgb(89 178 219)",
                       width:"max-content",
                        color: "white",
                        paddingLeft: "8px",
                        borderRadius: "10px",
                            border:"0px solid",}}>Languages</Typography>
                            <Typography style={{fontSize:"large",fontFamily:"cursive",color:"black"}}>To be added here</Typography></div>
                        </Grid>
                </Grid>
            
        </div>
        
        </Collapse>
        <Collapse in={plan} timeout="auto" unmountOnExit style={{transitionDuration:"3ms"}}>
        <div style={{
        overflow:"hidden",
        overflowX:"auto",
        border:"0px solid",
        marginLeft:"35%",
        display:"block",
        // backgroundColor:"#e1e3e6",
        borderRadius:"7px",
        backgroundImage:`url(${Image})`,
        // opacity: 0.5,
        backgroundSize: "cover",
        marginRight:"2%",
        padding:"1%",
        backgroundPosition: 'center',
    height:'auto'}}
        >   
            <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="stretch"
>
                            <Grid item xs={12} sm={12} md={5}
                            className={aajao.component}
                             style={{width:"48%",display:week?"block":"none"}}>

                                <div style={{display:"flex",
                                flexDirection: "column",
                                alignItems: "center"}}>
                            <Typography style={{fontSize:"x-large",fontFamily:"cursive", backgroundColor: "rgb(89 178 219)",
                            width:"max-content",
                            color: "white",
                            paddingLeft: "8px",
                            borderRadius: "10px",
                            border:"0px solid",}}>Weekly</Typography>
                             <div style={{display:"inline-flex",margin:"4px",flexWrap:"wrap"}} >
                                {
                                    [{id:"Mon"},{id:"Tue"},{id:"Wed"},{id:"Thu"},{id:"Fri"},{id:"Sat"},{id:"Sun"}].map((id)=>
                                        <div style={{margin:"0px"}}>
                                        <Button size="small"><Typography style={{fontSize:"large",fontFamily:"cursive", backgroundColor:"rgb(222 238 247)" ,
                                        width:"max-content",
                                        color: "rgb(89 178 219)",
                                        borderRadius:"6px",
                                        border:"0px solid",}}>{id.id}</Typography></Button>
                                        </div>)
                                }
                                </div>
                            <div style={{display:"inline-flex",margin:"4px"}}>
                                <Typography style={{fontSize:"x-large",fontFamily:"cursive",}}>Timing : </Typography>
                                {
                                    [{id:"Hr",sign:":"},{id:"Min",sign:":"},{id:"Sec",sign:""}].map((id)=>
                                        <div style={{margin:"4px",display:"inline-flex"}}>
                                        <Typography style={{fontSize:"large",fontFamily:"cursive", backgroundColor:"rgb(222 238 247)" ,
                                        width:"max-content",
                                        color: "rgb(89 178 219)",
                                        borderRadius:"6px",
                                        border:"0px solid",}}>{id.id}</Typography>
                                         <Typography style={{fontSize:"large",fontFamily:"cursive", 
                                        width:"max-content",
                                        
                                        borderRadius:"6px",
                                        border:"0px solid",}}>{id.sign}</Typography>
                                        </div>)
                                }
                            </div>
                            <div style={{display:"inline-flex",margin:"4px"}}>
                                <Typography style={{fontSize:"x-large",fontFamily:"cursive",}}>Duration : _____ </Typography>
                            </div>
                            <div style={{display:"inline-flex",margin:"4px"}}>
                                <Typography style={{fontSize:"x-large",fontFamily:"cursive",}}>Price : _______ </Typography>
                            </div>
                            <div style={{display:"inline-flex",margin:"4px"}}>
                                <Typography style={{fontSize:"x-large",fontFamily:"cursive",}}>Subject : _______ </Typography>
                            </div>
                            
                            </div>
                           
                            </Grid>
                            <Grid item xs={12} sm={12} md={5} className={aajao.component} style={{width:"49%",display:month?"block":"none"}}>

                            <div style={{display:"flex",
                                flexDirection: "column",
                                alignItems: "center"}}>
                            <Typography style={{fontSize:"x-large",fontFamily:"cursive", backgroundColor: "rgb(89 178 219)",
                            width:"max-content",
                            color: "white",
                            paddingLeft: "8px",
                            borderRadius: "10px",
                            border:"0px solid",}}>Monthly</Typography>
                             <Typography paragraph={true} style={{display:"inline-flex",margin:"4px",height:"max-content",maxWidth:"80%",}} >
                                {
                                    [{id:"Mon"},{id:"Tue"},{id:"Wed"},{id:"Thu"},{id:"Fri"},{id:"Sat"},{id:"Sun"}].map((id)=>
                                        <div style={{margin:"4px"}}>
                                        <Typography style={{fontSize:"large",fontFamily:"cursive", backgroundColor:"rgb(222 238 247)" ,
                                        width:"max-content",
                                        color: "rgb(89 178 219)",
                                        borderRadius:"6px",
                                        border:"0px solid",}}>{id.id}</Typography>
                                        </div>)
                                }
                                </Typography>
                            <div style={{display:"inline-flex",margin:"4px"}}>
                                <Typography style={{fontSize:"x-large",fontFamily:"cursive",}}>Timing : </Typography>
                                {
                                    [{id:"Hr",sign:":"},{id:"Min",sign:":"},{id:"Sec",sign:""}].map((id)=>
                                        <div style={{margin:"4px",display:"inline-flex"}}>
                                        <Typography style={{fontSize:"large",fontFamily:"cursive", backgroundColor:"rgb(222 238 247)" ,
                                        width:"max-content",
                                        color: "rgb(89 178 219)",
                                        borderRadius:"6px",
                                        border:"0px solid",}}>{id.id}</Typography>
                                         <Typography style={{fontSize:"large",fontFamily:"cursive", 
                                        width:"max-content",
                                        
                                        borderRadius:"6px",
                                        border:"0px solid",}}>{id.sign}</Typography>
                                        </div>)
                                }
                            </div>
                            <div style={{display:"inline-flex",margin:"4px"}}>
                                <Typography style={{fontSize:"x-large",fontFamily:"cursive",}}>Duration : _____ </Typography>
                            </div>
                            <div style={{display:"inline-flex",margin:"4px"}}>
                                <Typography style={{fontSize:"x-large",fontFamily:"cursive",}}>Price : _______ </Typography>
                            </div>
                            <div style={{display:"inline-flex",margin:"4px"}}>
                                <Typography style={{fontSize:"x-large",fontFamily:"cursive",}}>Subject : _______ </Typography>
                            </div>
                            
                            </div>
                           
                            </Grid>
                            <Grid item xs={12} sm={12} md={5}
                            className={aajao.component}
                             style={{width:"48%",display:year?"block":"none"}}>

                                <div style={{display:"flex",
                                flexDirection: "column",
                                alignItems: "center"}}>
                            <Typography style={{fontSize:"x-large",fontFamily:"cursive", backgroundColor: "rgb(89 178 219)",
                            width:"max-content",
                            color: "white",
                            paddingLeft: "8px",
                            borderRadius: "10px",
                            border:"0px solid",}}>Yearly</Typography>
                             <div style={{display:"inline-flex",margin:"4px"}} >
                                {
                                    [{id:"Mon"},{id:"Tue"},{id:"Wed"},{id:"Thu"},{id:"Fri"},{id:"Sat"},{id:"Sun"}].map((id)=>
                                        <div style={{margin:"4px"}}>
                                        <Typography style={{fontSize:"large",fontFamily:"cursive", backgroundColor:"rgb(222 238 247)" ,
                                        width:"max-content",
                                        color: "rgb(89 178 219)",
                                        borderRadius:"6px",
                                        border:"0px solid",}}>{id.id}</Typography>
                                        </div>)
                                }
                                </div>
                            <div style={{display:"inline-flex",margin:"4px"}}>
                                <Typography style={{fontSize:"x-large",fontFamily:"cursive",}}>Timing : </Typography>
                                {
                                    [{id:"Hr",sign:":"},{id:"Min",sign:":"},{id:"Sec",sign:""}].map((id)=>
                                        <div style={{margin:"4px",display:"inline-flex"}}>
                                        <Typography style={{fontSize:"large",fontFamily:"cursive", backgroundColor:"rgb(222 238 247)" ,
                                        width:"max-content",
                                        color: "rgb(89 178 219)",
                                        borderRadius:"6px",
                                        border:"0px solid",}}>{id.id}</Typography>
                                         <Typography style={{fontSize:"large",fontFamily:"cursive", 
                                        width:"max-content",
                                        
                                        borderRadius:"6px",
                                        border:"0px solid",}}>{id.sign}</Typography>
                                        </div>)
                                }
                            </div>
                            <div style={{display:"inline-flex",margin:"4px"}}>
                                <Typography style={{fontSize:"x-large",fontFamily:"cursive",}}>Duration : _____ </Typography>
                            </div>
                            <div style={{display:"inline-flex",margin:"4px"}}>
                                <Typography style={{fontSize:"x-large",fontFamily:"cursive",}}>Price : _______ </Typography>
                            </div>
                            <div style={{display:"inline-flex",margin:"4px"}}>
                                <Typography style={{fontSize:"x-large",fontFamily:"cursive",}}>Subject : _______ </Typography>
                            </div>
                            
                            </div>
                           
                            </Grid>
                        
                            <Grid item xs={12} sm={12} md={5}
                            className={aajao.component}
                             style={{width:"48%",padding:"105px"}}>
                             <div style={{display:"flex",
                                flexDirection: "column",
                                alignItems: "center",
                                flexWrap:"wrap"}}>
                                    {/* <AddCircleOutlineRoundedIcon style={{fontSize:"xxx-large",color:"#56add8"}} onClick={SimpleMenu}/> */}
                                   <SimpleMenu props={[setWeek,setMonth,setYear]}/>
                                    </div>
                           
                            </Grid>
                           
                        </Grid>
                
        </div>
        </Collapse>
        </>
    )
} 