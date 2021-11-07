import React, { useState } from "react";
import "../stylesheets/notifications.css";
import { useSelector } from 'react-redux';
import Image from "./Comment/naved.jpg";
import moment from "moment"
import ScrollToBottom from 'react-scroll-to-bottom';
function Notifications() {
  let content = [
    {
      img: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFsYW5jZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      message: "this is an random message for demo purpose",
      time: "1m",
    },

    {
      img: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFsYW5jZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      message: "this is an random message for demo purpose",
      time: "20min",
    },

    {
      img: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFsYW5jZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      message: "this is an random message for demo purpose",
      time: "2h",
    },
  ];

 let notification=[]

 notification = useSelector((state)=>{
  return state.authReducer?.Notifications})
  if(!notification)
  notification=[]
 
  return (
    <div className="notifications_container">

      
      <br />
    <div style={{position:"absolute",height:"100%",overflow:"auto"}}>
      {notification.slice(0).reverse().map((item) => {
        return (
          <div className="content">

            <div className="img_box">
              <img src={Image} />
            </div>

            <div className="message">{item.text}</div>

            <span style={{fontSize:"smaller"}}>{moment(item.Date).fromNow()}</span>
          </div>
        );
      })}
      </div>
    </div>
  )     
    
}

export default Notifications;
