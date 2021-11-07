import React, {useState} from "react";
import "../stylesheets/signIn.css";
import {useDispatch} from 'react-redux';
import {Link, useHistory, useLocation} from 'react-router-dom';
import IconButton from "@material-ui/core/IconButton";
import {Button} from "@material-ui/core";
import fb_icon from '../media/facebook_icon.svg';
import google_icon from '../media/google_icon.svg';
import { signin, signup } from '../actions/auth';
import {GoogleLogin} from 'react-google-login'; 
function SignIn() {
  let initialState = { email: '', password: ''}
  const dispatch = useDispatch();
  const history = useHistory();
  const [form, setForm] = useState(initialState);


  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log(`Form From Front end: ${form}`)
    dispatch(signin(form,history));
     
  }
  const responseGoogle = async(response) => {
    console.log(response);
    if(response.profileObj)
    dispatch(signin( {...form,
      name:response.profileObj.name,
      email:response.profileObj.email,
      password:response.profileObj.googleId},history))
  }

  const handleChangeForm = (e) => setForm(
    { ...form, [e.target.name]: e.target.value },
    );
       
  return (
    <div className="signIn_form_container">
      <div className="img_box">
        <img
          src="https://img.freepik.com/free-vector/organic-flat-people-business-training_23-2148909572.jpg?size=626&ext=jpg"
          alt=""
          srcset=""
        />
      </div>

      <div className="content">
        <h2>login to</h2>
        <h1>solvokit</h1>
        <form  onSubmit={handleSubmit}>
        <input name="email" type="email" className="login_inputs" onChange={handleChangeForm} placeholder="Email" />
        <input
          name="password"
          type="password"
          className="login_inputs"
          onChange={handleChangeForm}
          placeholder="password"
          
        />
        <button type="submit" className="login_btn">LogIn</button>
        </form>
        <div className="socio_logins" style={{margin:"0px"}}>
        
          <GoogleLogin
    clientId="517369409779-r4imdsp5d62jtakrtlo5qnjkv623gl68.apps.googleusercontent.com"
    buttonText="Use Google Account to Log In"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    render={renderProps => (<IconButton  onClick={renderProps.onClick} disabled={renderProps.disabled}><img src={google_icon} className="icon_img"/> </IconButton>
    )}
    cookiePolicy={'single_host_origin'}
  />
        </div>

        <Button component={Link} to="/forgot_pass">forgot password?</Button>

        <Button component={Link}  to="/signup" color='primary' className="create_account">create new account →</Button>
       
      </div>
    </div>
  );
}

export default SignIn;
