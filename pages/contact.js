import React, {useState} from "react";
import styles from "../styles/contact.module.css";
const Contact = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const handleBtn = (event) => {
    if(event.target.name == "name"){
      setName(event.target.value)
      console.log(name);
    }else if(event.target.name == "phone"){
      setPhone(event.target.value)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name,phone);
    const data = {name, phone}
    fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(res => res.json()).then(data => console.log("Success", data))

  }
  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email address</label>
          <input value={name} onChange={handleBtn} type="text" name="name" />
          <div> We will never share your email with anyone else.</div>
        </div>
        <div>
          <label>Phone</label>
          <input value={phone} name="phone" onChange={handleBtn} type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
