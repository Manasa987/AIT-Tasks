import react from 'react';
class Contact extends react.Component{
    state ={
        username:'',
        lastname:'',
        email:'',
        password:''
    }
    submitHandler=(e)=>{
    }
    render(){
        return(
            <form>
            <h1>This is Contact page </h1>
            <div>
                <label>UserName </label>
                <input className="ml-2" type="text" placeholder="enter the username" 
                value={this.state.username}
                onChange = {e => this.setState({username:e.target.value})}/>
            </div>
            <div>
                <label>LastName </label>
                <input className="ml-2" type="text" placeholder="enter the lastname" 
                value={this.state.lastname}
                onChange = {e => this.setState({lastname:e.target.value})}/>
            </div>
            <div>
                <label>Email </label>
                <input className="ml-2" type="text" placeholder="enter the email" 
                value={this.state.email}
                onChange = {e => this.setState({email:e.target.value})}/>
            </div>
            <div>
                <label>Password </label>
                <input className="ml-2" type="password" placeholder="enter the password" 
                value={this.state.password}
                onChange = {e => this.setState({password:e.target.value})}/>
            </div>
            <div>
                <label>Address</label>
                <textarea className="ml-2"></textarea>
            </div>
            <button>submit</button>
            </form>
        );
    }
}
export default Contact;
