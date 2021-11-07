import React from 'react';
import '../stylesheets/forgot_pass.css';


function forgot_pass() {
    return (
        <div className="signIn_form_container">
          <div className="img_box">
            <img
              src="https://www.paymentsjournal.com/wp-content/uploads/2020/09/forgot-password-concept-illustration_114360-1123.jpg"
              alt=""
              srcset=""
            />
          </div>
    
          <div className="content">
            <a href="/" className="back_to_login">← Back to login</a>
            <h2>Enter Your account Email</h2>
            <input type="email" className="login_inputs" placeholder="Email" />
            <input
              type="text"
              className="login_inputs"
              placeholder="Enter OTP"
            />
            <button className="login_btn">submit</button>
    
            <a href="#" className="otp">Send OTP</a>
    
            <a href="/signup" className="create_new_account">create new account →</a>
          </div>
        </div>
      );
}

// most of the styling come from signin.css
export default forgot_pass
