import { useState } from "react";

const ControlForm = () => {
  const [name, setName] = useState(null);
  const [email,setEmail] =useState(null);
  const [password,setPassword] = useState(null)
  const [error,setError] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password.length < 6){
        setError('password must be 6 carector or longer')
    }
    else {
        setError('');
        console.log(name,email,password)
    }
  };

  const nameSubmit = (e) => {
    setName(e.target.value);
  };

  const handleEmail = e =>{
    setEmail(e.target.value)
  }

  const handlePassword = e =>{
    setPassword(e.target.value)
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={"sabit"} name="name" onChange={nameSubmit} /> 
        <br />
        <input type="email" name="email" onChange={handleEmail}/> 
        <br />
        <input type="password" name="password" onChange={handlePassword}/>
        <br />
        <input type="submit" value="Submit"/>
        {
            error && <p>password must be 6 carector or longer</p>
            }
      </form>

    </div>
  );
};

export default ControlForm;
