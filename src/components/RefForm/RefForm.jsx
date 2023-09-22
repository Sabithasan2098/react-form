import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef("sabit")
    useEffect(() =>{
        nameRef.current.focus()
    },[])
    const handleSubmit = e =>{
        e.preventDefault()
        console.log(nameRef.current.value)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} defaultValue={'sabit'} type="text" name="name"  />
        <br />	
        <input type="text" name="lastName" id="" required />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefForm;
