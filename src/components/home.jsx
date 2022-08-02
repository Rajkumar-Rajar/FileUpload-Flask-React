import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";



function Home () {
    
    
return (

		 <div className="App">
            <form class="container" >
            <h1>LOGIN</h1>
            <input type="text" name="" placeholder="Username" /><br/><br/>
            <input type="password" name="" placeholder="Password" />

            <Link to="/about"><input type="submit" value="Login"/></Link>
            </form>
        </div>
	
);
};

export default Home;
