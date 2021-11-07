import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route ,Redirect} from 'react-router-dom';
// import {Container} from '@material-ui/core';
import Post from './Component/Home/Home';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer/Footer';
import ProfileContainer from './Component/Profile/ProfileContainer';
import Favourites from './Component/Favourite/favourites'
import Discussion from './Component/Discussions/Discussions'
import Videos from './Component/Videos/Videos'
import Message from './Component/Message/Message'
import './stylesheets/app.css';
import Notifications from './Component/Notifications'
import Comments from './Component/Comment/Comment_box';
import Discuss from './Component/Discuss/Discuss'
import SignIn from "./Component/SignIn";
import forgot_pass from "./Component/forgot_pass";
import SignUp from "./Component/SignUp";
import { connectWithWebSocket } from './utils/wssConnection/wssConnection';
import Dashboard from './Dashboard/Dashboard';
import LoginPage from './LoginPage/LoginPage';
import './stylesheets/general.css';
import jwt_decode from 'jwt-decode';
import ProfileContainerSearch from './Component/Search_Profile/ProfileContainer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
import { getData } from './actions/auth';
import { get_time_table } from './actions/actions';
import { getAllVideo } from './actions/videos';
const App = () => {
   const dispatch = useDispatch();
   const profile = localStorage.getItem("token");
   useEffect(() => {
      // const data = useSelector((state)=>(state))
      // connectWithWebSocket();
      const token = localStorage.getItem("token");
      //  console.log(token)
      if (token) {
         const resultData = jwt_decode(token);
         // console.log(resultData)
         dispatch(
            getData(resultData.id))
            dispatch(
               get_time_table(resultData.id))
              
      }
   }, [dispatch]);

   const favToggler = () => {
      document.querySelector('.favourites').classList.toggle('active')

   }

   const messageToggler = () => {
      console.log("reached")
      document.querySelector('.messages').classList.toggle('active')

   }
   const notificationToggler = () => {
      document.querySelector('.notifications').classList.toggle('active')

   }

   return (
      <BrowserRouter>
         <Navbar favToggler={favToggler} messageToggler={messageToggler}
            notificationToggler={notificationToggler} />
         {/* <Message /> */}
         <div className="favourites">
            <Favourites />
         </div>

         <div className="messages">
            <Message />
         </div>

         <div className="notifications">
            <Notifications />
         </div>

         <Switch>
            <Route path='/dashboard'> <Dashboard /> </Route>
            <Route path='/videologin'> <LoginPage /> </Route>
            <Route path='/' exact component={()=>(profile?<Redirect to="/post" />:<SignIn/>)} />
            <Route path='/post' exact component={Post} />
            <Route path='/discussion' exact component={Discussion} />
            <Route path='/video' exact component={Videos} />
            <Route path='/videos?page' exact component={Videos} />
            <Route path='/profile' exact component={ProfileContainer} />
            <Route path="/comments" component={Comments} />
            <Route path="/discuss" component={Discuss} />
            <Route path="/forgot_pass" component={forgot_pass} />
            <Route path="/signup" component={SignUp} />
            <Route path="/search" component={ProfileContainerSearch} />
         </Switch>
         <Footer />
      </BrowserRouter>
   );
}
export default App;
