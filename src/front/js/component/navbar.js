import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logoSW from "../../img/logoSW.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src={logoSW} /></span>
				</Link>
				{/* <div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div> */}
				<div className="ml-auto">
					<Link to="/login">
						<button className="btn btn-primary" style={{ marginRight: '5px' }}>SignUp</button>
					</Link>
					<Link to="/">
						<button className="btn btn-warning" onClick={() => actions.logout()}>
						Logout
						</button>
					</Link>
				</div>
				
			</div>
		</nav>
	);
};
