import React from 'react';

import {Routes,Route} from "react-router-dom";

import Home from "./components/home"
import About from "./components/about"
import Contact from "./components/contact"

export default function App(){

	return(

	
	<div className='App'>
	
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='about' element={<About />} />
			<Route path='contact' element={<Contact/>} />
		</Routes>
	</div>
	)

}


