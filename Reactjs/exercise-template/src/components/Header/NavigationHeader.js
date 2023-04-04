import { Container, Navbar, Nav } from 'react-bootstrap';

import {
	Link
} from 'react-router-dom'

export default function NavigationHeader() {
	return (
		<Navbar bg="dark" expand="lg">
			<Container>
				<Navbar.Brand href={"/"} className="text-light about">About Kero</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Nav className="mx-auto">
					<Link to={"/"} className="text-light nav-link">User interface</Link>
					<Link to={"/web-design"} className="text-light nav-link">Web design</Link>
					<Link to={"/programming"} className="text-light nav-link">Programming</Link>
				</Nav>
			</Container>
		</Navbar>
	)
}