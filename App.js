import React, { Component } from "react";
import "./App.css";


class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) 
	{ 
	alert("Email is required!"); 
	} 
	else if (!e.target.password.value) 
	{ 
	alert("Password is required!"); 
	}
	else if ( e.target.email.value === "mcl.estores@gmail.com" && e.target.password.value === "abcdefgh" ) 
	{ 
	alert("Login Successful!"); e.target.email.value = ""; e.target.password.value = ""; 
	} 
	else 
	{ 
	alert("The email and password is incorrect!"); 
	} 
	};

  handleClick = e => {
    e.preventDefault();

    alert("Register account form");
  };

  render() {
    return (
      <div className="App">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">E-mail: </label>
             <input type="email" name="email" placeholder="Insert valid E-mail"/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" placeholder="Insert valid Password" />
          </div>
          <button className="primary">Login</button>
        </form>
        <button className="secondary" onClick={this.handleClick}>
          Create New Account
        </button>
      </div>
    );
  }
}

export default App;