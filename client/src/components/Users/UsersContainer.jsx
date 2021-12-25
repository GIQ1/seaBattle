import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios'
import Users from "./Users";


class UsersAPIComponent extends React.Component {
    constructor(props){
      super(props)
    }
      componentDidMount(){
        this.props.toogleLoading(true)
        if (this.props.usersDate.length == 0)
        axios.get(`/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res =>{
          this.props.setUsers(res.data.items);
          this.props.setTotalPageCount(res.data.totalCount)
          this.props.toogleLoading(false)
      });
      if (this.props.usersDate.length > 0)
      this.props.toogleLoading(false)
      }
     
     
    
      render(){
    
        let changeUser = (d)=>{
          this.props.setCurrentPage(d);
          this.props.toogleLoading(true)
          axios.get(`/users?page=${d}&count=${this.props.pageSize}`).then(res =>{
            this.props.toogleLoading(false)
            this.props.setUsers(res.data.items);
        });
        }
        return (<Users changeUser={changeUser} 
          follow={this.props.follow}
          totalUsersCount= {this.props.totalUsersCount} 
          pageSize={this.props.pageSize}
          currentPage = {this.props.currentPage}
          usersDate={this.props.usersDate}
          isLoading={this.props.isLoading}
          toogleLoading={this.props.toogleLoading}/>
           )
        }
    }


let follow = (id) =>{
    return { type: 'FOLLOWING',  id:id }
}

let setUsers = (users) =>{
    return { type: 'SET-USERS',  usersDate:users }
}
let setCurrentPage = (page) =>{
    return { type: 'SET-PAGE',  currentPage: page }
}
let setTotalPageCount = (count) =>{
    return { type: 'SET-TOTAL-COUNT',  totalCount: count }
}
let toogleLoading = (togle) =>{
  return { type: 'TOGGLE-LOADING', isLoading:togle}
}

let mapStateToProps = (state) =>{
    return {
        usersDate: state.usersPage.usersDate,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isLoading:state.usersPage.isLoading,
    }
    }
const UsersContainer = connect(mapStateToProps, {
  follow,
  setUsers,
  setCurrentPage,
  setTotalPageCount,
  toogleLoading
})(UsersAPIComponent)

export default UsersContainer;
