import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';
import './Login.css';


class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: ''
        };
      }

      databinder=(e)=>{this.setState({ [e.target.name]: e.target.value });}

      loginHandle =(e)=>{
        const user = this.state.username;
        window.localStorage.setItem('user', user);
        window.location.reload();
      };
      
   
    render() {
     

        return (
            
              <div className="StyledDiv">
                <Form>
                    <div className="logintitle">Instagram</div>
                    <Input name="username" onChange={this.databinder} value={this.state.username} type="text" placeholder="Enter User Name" ></Input>
                    <Input name ="password" onChange={this.databinder} value={this.state.password} type="password" placeholder="password" ></Input>
                    <Button  onClick={this.loginHandle} >Log In</Button > <br/>
                    <div className="passwordlink"> 
                    <a href="#">Forgot Password?</a></div>
                </Form>
                </div>
            
        );
    }
}

export default Login;


