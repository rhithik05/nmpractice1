import React, { useEffect, useState } from "react";

const registrationform = () => {
  const loggedin = JSON.parse(sessionStorage.getItem("loggedin"));
  const forms=JSON.parse(localStorage.getItem('forms')) || {}
  const [formdata,setformdata] = useState({
    name:'',
    phone:'',
    date:'',
    guests:''
  }
  )

  useEffect(()=>{
    if(loggedin?.username){
        setformdata((prev) =>{return{ ...prev, name: loggedin.username }});
    }
  },[loggedin])

const hanldesubmit = (e)=>{
   const {name,value} = e.target
   setformdata(curr=>{return{...curr,[name]:value}})
};

const handlesubmitform = (e)=>{
    e.preventDefault()
    if(loggedin?.username){
        const usern=loggedin.username
        forms[usern]=formdata
        localStorage.setItem('forms',JSON.stringify(forms))
        alert('booking successful')
    }
    else{
        alert('please login')
    }
}

  return (
    <>
      <div className="form-container">
        <form action="">
          <label htmlFor="">Name</label>
          <input name="name" value={formdata.name} type="text" onChange={hanldesubmit} required/>
          <label htmlFor="">phone</label>
          <input name="phone" value={formdata.phone} type="tel" onChange={hanldesubmit} required/>
          <label htmlFor="">Date</label>
          <input name="date" value={formdata.date} type="date" onChange={hanldesubmit} required/>
          <label htmlFor="">number of guests</label>
          <input name="guests" value={formdata.guests} type="number" onChange={hanldesubmit} required/>
          <button onClick={handlesubmitform}>submit</button>
        </form>
      </div>
    </>
  );
};

export default registrationform;
