import React from "react"
import User from "./User/User";
import s from './Users.module.css'
import * as axios from 'axios'

class Users extends React.Component {

  componentDidMount(){
    if (this.props.usersDate.length == 0)
    axios.get(`/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res =>{
      this.props.setUsers(res.data.items);
      this.props.setTotalPageCount(res.data.totalCount)
      debugger
  });
  }
 

  render(){
    let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
   let pages=[];
    for(let i=1;i<=pagesCount;i++){
     
      pages.push(i);
    }
    let changeUser = (d)=>{
      this.props.setCurrentPage(d);
      axios.get(`/users?page=${d}&count=${this.props.pageSize}`).then(res =>{
        this.props.setUsers(res.data.items);
    });
    }
    return (<>
    <div>
    {pages.map(d => {return <span onClick={()=> changeUser(d)} className={this.props.currentPage === d ? s.selected: s.item}>{d}</span>})}
    </div>
        {this.props.usersDate.map(date => <User date={date} follow={this.props.Follow}/>)}
        </>)
    }
}

export default Users;