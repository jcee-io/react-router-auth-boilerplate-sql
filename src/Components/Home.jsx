import React from 'react';
import Secret from './Secret';
import { Link } from 'react-router-dom';
export default props => {
	if(props.authenticated) {
		return (<Secret view={props.secretView} />);
	}

	return (<Home />);
};

const Home = () => (
  <div id="home">
  	<div className="row" id="home-top">
  		<div className="col-md-12">
	  		<h1>JWT-Auth Boilerplate</h1>
	  		<h2>Don't reinvent the wheel when it's already invented for you.</h2>
		  	<Link className="home-button btn btn-success" to="/signup">Sign Up</Link>
		    <Link className="home-button btn btn-success" to="/login">Login</Link>
  		</div>
    </div>
    <div className="row" id="home-bottom">
    	<div className="col-md-3">
    		<i className="fa fa-list-ul" />
    		<h3>Created With React</h3>
    		<p>
    			This application is created with React with routing enabled. Being able
    			to create new components can be routed in easily in the App component.
    		</p>
    	</div>
    	<div className="col-md-3">
    		<i className="fa fa-lock" />
    		<h3>Secure Authentication</h3>
    		<p>
    			Your information is hashed with the bcrypt module. Your information is then stored
    			in the MariaDB/MySQL database. Every action taken will depend on an existing token on
    			the server side (held by Redis). 
    		</p>
    	</div>
    	<div className="col-md-3">
    		<i className="fa fa-thumbs-up" />
    		<h3>Future Developments</h3>
    		<p>
    			There are several things that can happen in the future. An improvement in functionality?
    			Perhaps another JWT-Auth instance with MongoDB? Maybe redesigned as a session-based auth '
    			suite with OAuth. Keep in touch with my GitHub account @jcruzz and stay tuned.
    		</p>
    	</div>
    	<div className="col-md-3">
    		<i className="fa fa-code" />
    		<h3>Open Source</h3>
    		<p>
    			This website is open to being improved, innovated, and has an existing codebase on GitHub. Contributions
    			and Pull Requests are very welcome.
    		</p>
    	</div>
    </div>
  </div>
);