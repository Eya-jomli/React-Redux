import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
	return (
		<Navbar bg="primary" variant="dark">
			<Navbar.Brand href="/">Atelier 2</Navbar.Brand>
			<Nav className="mr-auto">
				<NavLink to="/events" className="nav-link" activeClassName="active">
					MyEvents
				</NavLink>
				<NavLink to="/events" className="nav-link" activeClassName="active">
					Events
				</NavLink>
			</Nav>
		</Navbar>
	);
};

export default NavigationBar;
