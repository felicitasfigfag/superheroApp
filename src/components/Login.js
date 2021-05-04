import React from 'react';
//CSS
import '../login.css';
import loginLogo from '../img/loginlogo.jfif';
//services
import Apiurl from '../service/apirest.js'
//library
import axios from 'axios'

class Login extends React.Component{
    constructor(props){
        super(props);
    }
    state={
        form:{
            "email" : "",
            "password": ""
        },
        error:false,
        errorMsg:""
    }
    handleChange = async e => {
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }
    handleSubmit = e =>{
        e.preventDefault()
    }
    handleButton = e =>{
        let url= Apiurl;
        axios.post(url,this.state.form)
        .then( response =>{
            
            if(response.request.status === 200){
                console.log('success ', response)
                localStorage.setItem('token', response.data.token)
                this.props.history.push("/home")
            }
            else if(response.request.status === 401){ 
                console.log(response.data.result.error)
                }
        })
        .catch( error => {
            console.log(error.response.data)
            console.log(error.response.status)
            this.setState({
                error: true,
                errorMsg: 'Please provide valid mail and password'})
            })
}
    render(){
        return(
            <React.Fragment>
            <div className="container h-100">
            <div className="d-flex justify-content-center h-100">
                
                <div className="user_card">
                    <div className="d-flex justify-content-center">
                        <div className="brand_logo_container">
                            <img src={loginLogo} className="brand_logo" alt="Logo" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center form_container">
                        
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" 
                                name="email" 
                                className="form-control input_user"                               
                                placeholder="email"
                                onChange={this.handleChange}
                            />

                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" 
                                name="password" 
                                className="form-control input_pass"         
                                placeholder="password"
                                onChange={this.handleChange}
                                />
                            </div>
                                <div className="d-flex justify-content-center mt-3 login_container">
                            <button type="submit" name="button" className="btn login_btn" onClick={this.handleButton}>
                                Login
                            </button>
                    </div>
                        </form>
                    </div>
            
                    <div className="mt-4">
                    {this.state.error === true &&
                        <div className="alert alert-danger" role="alert">
                        {this.state.errorMsg}
                    </div>}
                    </div>
                </div>
		</div>
	</div>
            </React.Fragment>
        )
    }
}
export default Login;