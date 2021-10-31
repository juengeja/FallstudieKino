import React from 'react';
import { connect } from 'react-redux'
import { changeState} from '../components/actions/storeActions';

class Login extends React.Component{

    handleChange = () =>{
        this.props.changeState()
    }

    handleSubmit = () => {
        this.props.changeState()
    }

    render(){
        console.log(this.props.loginState ? 'true' : ' false')
        return(
            <>
            <div>
                <h6>Login</h6>
            </div>
            <div>
                <form onSubmit = {this.handleSubmit}>
                <div>
                    <label>Benutzername</label>
                    <input type="text" name="username" placeholder="Benutzername" required/>
                </div>
                <div>
                    <label>Passwort</label>
                    <input type="password" name="password" placeholder="Passwort" required/>
                </div>
                    
                    
                <button  class="booking-btn_100" type="submit">Login</button>
                </form>
            </div>
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