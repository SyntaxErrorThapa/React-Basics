import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const {name, value} = event.target
    console.log(name)
    setContact(preValue => (
      {
        ...preValue,
        [name] : value,
      }
    ))
  }

  function handleSubmit(event) {
    event.preventDefault();
  }


  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="fName" placeholder="First Name" value={contact.fName}/>
        <input onChange={handleChange} name="lName" placeholder="Last Name" value={contact.lName}/>
        <input onChange={handleChange} name="email" placeholder="Email" value={contact.email}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
