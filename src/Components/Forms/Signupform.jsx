import React, { useState } from "react"; 
import { addUser } from "../../service/api.js";

const SignupForm = () =>{

    const [user, setUser] = useState({
        cname:'',
        email:'',
        username:'',
        password:'',
        image:'',
    });

    const fileData = (e) =>{
        setUser({...user, image:e.target.files[0]});
    }

    const onValueChange = (e) =>{
        setUser({...user, [e.target.name]:e.target.value});
        console.log(user);
    }

    const formData = async(e) =>{
        e.preventDefault();
        const formData = new FormData()

        formData.append('image', user.image)
        formData.append('cname', user.cname)
        formData.append('email', user.email)
        formData.append('username', user.username)
        formData.append('password', user.password)

        const res = await addUser(formData)
        if(res.status === 201){
            alert("Data Successfully Inserted");
        }else{
            alert('Not Inserted');
        }
    }

    return(
        <div className="form-container">
            <h1>Sign Up</h1>
            <form>
                <input type="text" name="cname" onChange={(e) => onValueChange(e)} placeholder="Name"></input>
                <input type="text" name="email" onChange={(e) => onValueChange(e)} placeholder="Email"></input>
                <input type="text" name="username" onChange={(e) => onValueChange(e)} placeholder="Username"></input>
                <input type="password" name="password" onChange={(e) => onValueChange(e)} placeholder="Password"></input>
                <input type="file" name="image" onChange={fileData}></input>
                <button onClick={formData}>Sign Up</button>
            </form>
        </div>

    )
}

export default SignupForm;