const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.lastName.value);
        console.log(e.target.email.value)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" /><input type="text" name="lastName" id="" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
