import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { authThunkCreator } from '../../redux/authReducer'

class HeaderContainerAPI extends React.Component {

  auth(){
    this.authThunkCreator()
  }
  render()
  {return <Header {...this.props} auth={this.auth}/>;}
};

let mapStateToProps = (state) =>{
  return {
    isAuth:state.authReducer.isAuth,
    name:state.authReducer.name
  }
}



let HeaderContainer= connect(mapStateToProps,{authThunkCreator})(HeaderContainerAPI)

export default HeaderContainer;
