import React,{useState} from 'react';
import LoginForm from './components/LoginForm';

const App=()=>{
  const adminUser={
    email:"admin@admin.com",
    password:"admin1234"
    }
  const [user,setUser]=useState({name:"",email:''});
  const [error,setError]=useState('');

  const Login=(details)=>{
    if(details.email===adminUser.email&&details.password===adminUser.password){
      setUser({
        name:details.name,
        email:details.email
      })
    }else{
      setError("Details does not match");
      setTimeout(function(){
        setError("");
      },1500)
    }
  }
  const Logout=()=>{
    setUser({name:"",email:""});    
  }
  
  return(
    <div className='App'>
      {(user.email!=="")?(
          <div className='welcome'>
            <h2>Welcome, <span>{user.name}</span></h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ):(
          <LoginForm Login={Login} error={error} />
        )}
    </div>
  )
}

export default App;