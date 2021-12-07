import { Container } from "react-dom";
import { Link, useHistory } from "react-router-dom";
function LoginForm(){
    function form(e){
        e.preventDefault();
       }    
    return (
   
        <div>
        <form action="/" onSubmit={form}>
            <legend>Введите имя</legend>
            <input></input>
            <button><Link to="/main" >Подтвердить</Link></button>
        </form>
        
        </div>
        )
}
         
  export default LoginForm;