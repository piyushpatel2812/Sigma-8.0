import { useState } from "react";

export default function Form(){
  let [formData,setFormData] = useState({
    fullName:"",
    userName:"",
  });


    // let handleNameChange = (event)=>{
    //     setFullName(event.target.value);
    // };
    // let handleUserName = (event)=>{
    //     setUserName(event.target.value);
    // };

    let handleInputChange = (event) =>{
        // let fieldName = event.target.name;
        //  let newValue = event.target.value;
        setFormData((currData)=>{
            // currData[fieldName]= newValue;
            return{...currData,[event.target.name]:event.target.value};
        });
    }

    let handleSubmit = (event)=>{
        event.preventDefault()
        useFormData({
            fullName:"",
            userName:"",
        })
    }
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
            <input placeholder="enter full name" type="text" value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName"/>
            <br></br>
            <label htmlFor="userName">Full Name</label>
            <input placeholder="enter user name" type="text" value={formData.userName} onChange={handleInputChange} id="username" name="userName"/>
             <button>Submit</button>
        </form>
       
    )
}