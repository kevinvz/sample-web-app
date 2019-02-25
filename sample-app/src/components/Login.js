import React from 'react';
import ReactDOM from 'react-dom';
import * as Blockv from "@blockv/sdk";
import {Redirect} from 'react-router-dom';

const bv = new Blockv({
  appID : "e0809328-ff19-4197-b0d1-13a721599b1f",
  server : "https://api.blockv.io",
  websocketAddress : "wss://newws.blockv.io",
  
  // optional field for usage with multiple instances of the BLOCKv SDK on the
  // same client-side page:
  // prefix: "my-sdk-instance"
});

class Login extends React.Component{

  

  state = {email: '', password: '', message: '', toProfile: false};

  

  onLoginSubmit = async(e) => {
    e.preventDefault();
    try {
    const user = await bv.UserManager.login(this.state.email, "email", this.state.password);
    console.log(user);
    this.setState({username: user.firstName, message: 'Login successful.', toProfile: true});
    }catch (err) {
      console.error("error logging in user:", err.message);
      this.setState({message: 'Login failed.'});
    };
  } 

  render(){
    if(this.state.toProfile === true){
      return(
        <Redirect to="/profile" />
      );
    }

    return (
      <div>
        <form onSubmit={this.onLoginSubmit}>
          <div className="ui inverted segment">
            <div className="ui inverted form">
              <div className="two fields">
                <div className="field">
                  <label>Email Address</label>
                  <input placeholder="enter your email address" type="text"value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
                </div>
                <div className="field">
                  <label>Password</label>
                  <input placeholder="enter your password" type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} />
                </div>
              </div>
            </div>
            <button className="ui submit button" value="submit">Submit</button>
          </div>
        </form>
        <h1>{this.state.message}</h1>
      </div>
    );
  }

}

export default Login