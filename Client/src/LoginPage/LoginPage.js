import React, { useState } from 'react';
import { connect } from 'react-redux';
import logo from '../resources/logo.png';
import UsernameInput from './components/Usernameinput';
import SubmitButton from './components/SubmitButton';
import { useHistory } from 'react-router-dom';
import { registerNewUser }  from '../utils/wssConnection/wssConnection';
import { setUsername } from '../store/actions/dashboardActions';

import './LoginPage.css';

const LoginPage = ({ saveUsername }) => {
  const [username, setUsername] = useState('');

  const history = useHistory();

  const handleSubmitButtonPressed = () => {
    registerNewUser(username);
    saveUsername(username);
    history.push('/dashboard');
  };

  return (
    <div className='login-page_container background_main_color'>
      <div className='login-page_login_box background_secondary_color'>
        <div className='login-page_logo_container'>
          <img className='login-page_logo_image' src={logo} alt='VideoTalker' />
        </div>
        <div className='login-page_title_container'>
          <h1>VIDEO CHAT</h1>
        </div>
        <UsernameInput username={username} setUsername={setUsername} />
        <SubmitButton handleSubmitButtonPressed={handleSubmitButtonPressed} />
      </div>
      <footer> <small>&#9400; Copyright 2021, Solvokit</small> </footer>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    saveUsername: username => dispatch(setUsername(username))
  };
};

export default connect(null, mapActionsToProps)(LoginPage);
