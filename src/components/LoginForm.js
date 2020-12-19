import React,{useState} from 'react';

const LoginForm=({Login,error})=>{
	const [details,setDetails]=useState({name:"",email:"",password:""});

	const submitHandler=(e)=>{
		e.preventDefault();
		Login(details);
	}
	return(
		<form onSubmit={submitHandler}>
			<div className='form-inner'>
				<h2>Login</h2>
				{(error!=="")? (<div className='error'>{error}</div>):"" }
				<div className='form-group'>
					<label htmlFor="name">Name:</label>
					<input value={details.name}  type="text" id='name' name='name' 
						onChange={(e)=>setDetails({...details,name:e.target.value})}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor="email">Email:</label>
					<input value={details.email} type="email" id='email' name='email' 
					onChange={(e)=>setDetails({...details,email:e.target.value})}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor="password">Password:</label>
					<input value={details.password} type="password" id='password' name='password' 
						onChange={(e)=>setDetails({...details,password:e.target.value})}
					/>
				</div>
				<input type="submit" value='Login' />
			</div>
		</form>
	)
}

export default LoginForm;