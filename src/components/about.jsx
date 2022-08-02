import { useState } from 'react'
import axios from "axios";
import logo from './logo.svg';
import './app1.css';
import React from "react";
import { Link } from "react-router-dom";

function About () {
    const [file, setFile] = useState()
    const [profileData, setProfileData] = useState(null)

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  function handleSubmit(event) {
    event.preventDefault()
   
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    
    
    
    axios({
      url:"/upload",
      method:"POST",
      data:formData
    }).then((response) => {
      const res =response.data
      setProfileData(({
        profile_name: res.file_path,
        about_me: res.extention}))
    })
    console.log("check it");
  
  }



return (
	
	<div className="App">
            <form class="container" onSubmit={handleSubmit} >
            <h1>UPLOAD FILE</h1>
            <input type="file" onChange={handleChange}/><br/><br/>
            <input type="submit" value="UPLOAD" />
            <Link to="/contact"><input type="submit" value="NEXT PAGE" /></Link>
            
    
            </form>
            <h2>{profileData && <p>
              <p style={{marginTop:"600px"}}>
           this is {profileData.about_me}{"  "}file</p></p>    }</h2>
            {/* {profileData && <div>
              <p style={{marginTop:"600px"}}>
           file extension: {profileData.about_me}</p>
              <img style={{height:"100px",width:"100px"}} src={profileData.profile_name} alt="picturee" />
              <iframe src={profileData.profile_name} />
            </div>
        } */}
            
        </div>
        
	
);
};

export default About;
