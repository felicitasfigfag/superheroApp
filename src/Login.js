import React from 'react';

class Login extends React.Component{
    state={
        email:'',
        pwd:''
    }
    handleChange = (e) => {
        const{name, value} = e.target
        this.setState({[name]:value})
    }
    handleSubmit = (e) =>{
        e.preventDefault()
    }
    render(){
        return(
            <div>
                <form>
                    <input type="email" name="email" placeholder="email..." required onChange={this.handleChange}/>
                    <input type="password" name="pwd" placeholder="password..." required onChange={this.handleChange}/>
                    <button onSubmit>Log in</button>
                </form>
            </div>
        )
    }
}
export default Login;