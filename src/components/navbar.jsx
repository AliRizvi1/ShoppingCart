import React, { Component } from 'react';

//Stateless Functional Component
//Instead of a class, define a function that returns a react element
const NavBar = ({ totalCounters }) => {
	return (
		<nav className="navbar navbar-light bg-light">
  		<a className="navbar-brand" href="#">
  			Navbar <span 
  				className="badge badge-pill badge-secondary">
  				{totalCounters}
  				</span>
  		</a>
		</nav>
	);
};

export default NavBar;