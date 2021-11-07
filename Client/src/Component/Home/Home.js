import React,{useState,useEffect} from "react";
import Posts from "../Posts/Posts";
import { Grid } from "@material-ui/core";
import {useDispatch,useSelector} from 'react-redux';
import Sidebar from "../Sidebar/Sidebar";
import Resource from "../resource/Resource";
import ShareIcon from '@material-ui/icons/Share';
import {getPost} from '../../actions/askFeed';



const Home = () => {

  const [currentId, setCurrentId] = useState(0);
 
  
 
  
    const handleShareNotes = () =>{
        document.querySelector('.share_notes').classList.toggle('active')
        
    }
    


  return (
    <Grid className="ask_expert_container" style={{ position: "relative" }}>
      <div
      className="share_notes_toggler"
        onClick={() => {handleShareNotes()}}
      >
       <ShareIcon style={{color:"white",fontSize:"2em",transform:'translate(-1px, 3px)',pointerEvents:"none"}}/> 
      </div>
      <Grid className="sidebar_container_in_ask">
        <Sidebar />
      </Grid>
      <Grid className="posts_container">
        <Posts   currentId={currentId} setCurrentId={setCurrentId}/>
      </Grid>
      <div className="share_notes active">
        <Resource />
      </div>
    </Grid>
  );
};

export default Home;


