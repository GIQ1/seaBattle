import React from 'react';
import {Field,reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { authThunkCreator } from '../../redux/authReducer'
import { Navigate } from 'react-router-dom';
import { Input } from '../../common/FormsControls';
import { requiredField } from '../utils/validators/validators';
import s from './LoginPage.module.css'

const LoginForm = ({handleSubmit, error}) =>{
  return(
    <form onSubmit={handleSubmit}>
      <div><Field placeholder='login' component={Input} name={'login'} validate={[requiredField]}/></div>
      <div><Field placeholder='password' component={Input} name={'password'} type={'password'} validate={[requiredField]}/></div>
      <div><Field type={'checkbox'}  component={'input'} name={'rememberMe'}/>remember me</div>
      <button>Confirm</button>

     {error ? <div className={s.error}>{error} </div>:''}
    </form>
  )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

const LoginPage = function (props) { 
  if(props.isAuth) return <Navigate to='/profile'/>
  const onSubmit = (formData) =>{
    props.authThunkCreator(formData)
  }
  return <><h1>LOGIN</h1><LoginReduxForm onSubmit={onSubmit} {...props}/></>
};


let mapStateToProps = (state) =>{
  return {
    isAuth:state.authReducer.isAuth
  }
}

let LoginPageContainer= connect(mapStateToProps,{authThunkCreator})(LoginPage)

export default LoginPageContainer;
