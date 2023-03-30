import {Container, Navbar, Nav} from 'react-bootstrap';

import{
	Link
} from 'react-router-dom'
export default function Navigation(){
	return(
		<Navbar bg="info" variant="info" >
        <Container>
          <Nav className="me-auto">
            <Link to={"/"} className="text-light nav-link">Home</Link>
            <Link to={"/Blog"} className="text-light nav-link">Blog</Link>
            <Link to={"/Contact"} className="text-light nav-link">Contact</Link>
			<Link to={"/About"} className="text-light nav-link">About</Link>
          </Nav>
        </Container>
      </Navbar>
	)
}