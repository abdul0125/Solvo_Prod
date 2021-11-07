import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {AppBar,Toolbar} from "@material-ui/core"
import ScrollToBottom from 'react-scroll-to-bottom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Typography } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import CommentArea from './TextField';
import { TextField } from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { TextareaAutosize } from '@material-ui/core';
import io from "socket.io-client"
import { getmessage,postmessage} from '../../actions/messages';
import { IconButton } from '@material-ui/core';
import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { useSelector } from 'react-redux';
import { getData } from '../../actions/auth';
import Messages from './messages';
let socket
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    height: 'max-content',
    minHeight:"400px",
    maxHeight:"500px",
    
    overflow:"hidden",
    border:"1px solid black",
    borderRadius:"7px",

  },
  inline: {
    display: "inline",
    fontWeight:"600",

  },
  scroll: {
    // height: 100
  }
  
})); 


let result
export default function Message() {
  //localStorage.clear()
  
  const [cont,setCont] = useState({name:"",email:""})
  const classes = useStyles();
  const dispatch=  useDispatch()
  const [dis,setDis]=useState(false)
  let token;
  result =  useSelector((state)=>{
    return state.authReducer})
  // const [result,set]=useState(result1.authReducer)
  // useEffect(()=>{
  //   if(result1.authReducer.contacts)
  //   set(result1.authReducer)
  // },[result1])
      
  const localStoragetoken = localStorage.getItem("token");
  if(localStoragetoken)
  token = jwt_decode(localStoragetoken);
  const [messages,setMessages]=useState([])
  // console.log(result)
  useEffect(()=>{
    socket = io('localhost:5000')
    if(token){
    socket.emit('addUser',token.email)}
  },['localhost:5000',dispatch])
  const [arr,setArr]=useState(result?.contacts)
  useEffect(()=>{socket.on('recieve',data=>{
      console.log(data,result)
      if(result?.contacts)
      { 
        let index=0
    let source=0
    let newContacts = result.contacts.map((contact)=>{
      
      if(contact.email===data.sender)
      { contact.messages.push([false,data.text])
        source=index
      }
      index+=1
      return contact})
      let temp =newContacts[source] 
      newContacts.splice(source,1)
      result.contacts=[temp].concat(newContacts)
      setArr(result.contacts)
    console.log(result.contacts)}
    })
    },[])
    const send = (text)=>{
      dispatch(postmessage(result._id,result.email,cont.email,[true,text]))
      //localStorage.setItem('result',JSON.stringify(newResult))
      console.log(result)
      
        socket.emit('sendMessage',{user:cont.email,text:text,sender:result.email})
    }
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() 

  // useSelector((state)=>console.log(state))
  {useEffect(()=>{
    setArr(result?.contacts)},[result?.contacts])}
  // console.log(arr)
  if(!result){
    return(<></>)
  }
else
{
  return (
    <div style={{margin:"auto",width:"50%",position:"relative",marginTop:"20px", marginLeft:"60px",overflow:'auto'}}>
      <List className={classes.root}style={{display:dis?"none":"block",overflow:'auto'}}>
      { arr?
        arr.map((contact) =>(         
          <div>
          <ListItem alignItems="flex-start" button onClick={()=>{
                      setDis(!dis)
                      setCont(contact)
                      setMessages(contact.messages)
                      document.getElementById(contact.name).style.fontWeight=400
                  }}>
            <ListItemAvatar>
              <Avatar alt={contact.name}  />
            </ListItemAvatar>
            <ListItemText
              primary={contact.name}
              secondary={
                <React.Fragment>
                  <Typography
                    id={contact.name}
                    variant="body1"
                    className={classes.inline}
                    color="textPrimary">
                 { contact.messages[contact.messages.length-1]}
                  </Typography>
                </React.Fragment>
                  }/>
      </ListItem>
      <Divider variant="inset" component="li" />
      </div>
      )):null}
      </List>
      
        
      
      <div className={classes.root}style={{display:!dis?"none":"block",
      minHeight:"450px",
      maxHeight:"450px",
      position:"relative"}}>
      <AppBar  style={{borderRadius:"7px",position:"sticky"}} color="inherit"  >
      <Toolbar style={{boxSizing:"inherit",padding:"2px",}}>
      <div style={{display:"inline-flex"}}>
      <ArrowBackIcon onClick={()=>{setDis(false)}} style={{marginTop:"7px"}}/>
      <div >
      <div style={{marginLeft:"4px",display:"inline-flex"}}>
      <Avatar alt={cont.name} src="/static/images/avatar/1.jpg"/> 
      </div>
      <Typography variant="body2">Status</Typography>
      </div>
      <Typography style={{marginTop:"8px",marginLeft:"4px"}}>{cont.name}</Typography>
      </div>
      </Toolbar>
      </AppBar>

        <Messages email={token?token.email:null} time={time} result={result} dis={dis} cont={cont} send={send}/>
       </div> 
    </div> 
  );
          }
}
