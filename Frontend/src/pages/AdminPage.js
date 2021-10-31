import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { connect } from 'react-redux';

class AdminPage extends Component{

    render(){
    if(!this.props.loginState) {
        this.props.history.push('/login')
    }

    return (
        <>
            <Hero hero="programHero">
                <Banner title="AdminPage" />
            </Hero>

        </>
    );
    }
}

const mapStateToProps = (state) => {
    return {
        loginState: state.loginState
    }
}
export default connect(mapStateToProps)(AdminPage)