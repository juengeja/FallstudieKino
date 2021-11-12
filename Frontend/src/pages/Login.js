import React from 'react';
import { connect } from 'react-redux'
import { changeState} from '../components/actions/storeActions';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import axios from 'axios';
import ScrollButton from '../components/ScrollButton';

class Login extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password:''
        }
    };


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        const login_json = {
            'adminID': this.state.username,
            'username': this.state.username,
            'password': this.state.password
        }

        axios.put('http://5.45.107.109:4000/api/login', login_json)
        .then(res => {
          if (res.data != null) {
            res.data.successful ? this.props.changeState() : alert("Benutzername oder Passort falsch")
            this.props.history.push('/adminpage')
          } else {
            alert("Ein Fehler ist aufgetreten")
          }
        })
    }

    render(){

        return(
            <>
            <Hero hero='loginHero'>
                <Banner title="Login"></Banner>
            </Hero>
            <div className="login-Container">
                <form onSubmit = {this.handleSubmit}>
                <div>
                    <label>Benutzername</label>
                    <br/>
                    <input type="text" name="username" class="login_input" onChange={this.handleChange} required/>
                </div>
                <div>
                    <label>Passwort</label>
                    <br/>
                    <input type="password" name="password" class="login_input"  onChange={this.handleChange} required/>
                </div>
                       
                <button  class="booking-btn" type="submit">Login</button>
                </form>
            </div>
            <ScrollButton />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginState: state.loginState
    }
}


const mapDispatchToProps = (dispatch) => {

    return {
        changeState: () => { dispatch(changeState()) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)