// Gekopieerd van https://react-bootstrap.github.io/components/modal/ => Live demo

import { Alert, Button, Modal, Container, ButtonGroup, Accordion } from 'react-bootstrap' // put it all in 1 line or import them sepereatly
// import Button from 'react-bootstrap/Button' 
// import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function App() {
	const [show, setShow] = useState(false);

	// const handleClose = () => setShow(false);
	// const handleShow = () => setShow(true);
	const handleModal = () => setShow(!show); // instead of handleClose and handleShow, we can also put it in 1 line like handleModal

	return (
		<Container className="bg-light">
			<Alert variant='danger'>
				Hello World - Notification
			</Alert>

			<Button variant="primary" onClick={handleModal}>
				Launch demo modal
			</Button>
			<br />
			<Modal show={show} onHide={handleModal}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleModal}>
						Close
					</Button>
					<Button variant="primary" onClick={handleModal}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
			<ButtonGroup aria-label="Basic example">
				<Button variant="warning">Left</Button>
				<Button variant="success" className="mx-1">Middle</Button>
				<Button variant="info">Right</Button>
			</ButtonGroup>

			{/* defaultActiveKey will show the text in accordion*/}
			<Accordion defaultActiveKey="10">
				<Accordion.Item eventKey="5">
					<Accordion.Header>Accordion Item #1</Accordion.Header>
					<Accordion.Body>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
						minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="10">
					<Accordion.Header>Accordion Item #2</Accordion.Header>
					<Accordion.Body>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
						minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

		</Container >
	)
}

export default App