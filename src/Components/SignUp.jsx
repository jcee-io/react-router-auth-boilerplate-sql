import React from 'react';

export default props => {
	return !props.authenticated ?
	  <Form {...props} /> :
	  <Redirect to="/" />
};


const Form = props => (
  <form onSubmit={props.handler}>
    Username: <input name="username"/>
    Password: <input type="password" name="password"/>
    Email: <input name="email"/>
    <button>Submit</button>
  </form>
);