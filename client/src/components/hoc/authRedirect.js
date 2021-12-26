import React from "react";
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom';

export const authRedirect = (Compoment) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to="/login" />

                return <Compoment {...this.props }/>
        }
    }
    let mapStateToProps = (state) =>{
        return {isAuth:state.authReducer.isAuth
    }}
    const RedirectComponentContainer = connect(mapStateToProps,{})(RedirectComponent)
return RedirectComponentContainer;
}

