import { Container, Row, Col, ListGroup } from "react-bootstrap"


import {
	Link
} from 'react-router-dom'

import { useState } from "react"

export default function Layout({ children }) {
	const [useLink, setUseLink] = useState({
		project1: false,
		project2: false,
		project3: false,
		project4: false
	})

	return (
		<Container fluid>
			<Row>
				<Col md={4} className="bg-light text-end">
					<ListGroup>
						<ListGroup.Item className={useLink.project1 ? "active" : ""} onClick={() => setUseLink({ project1: true, project2: false, project3: false, project4: false })}><Link to="/project1" className={`text-decoration-none ${useLink.project1 ? 'text-light':'text-dark'}`}>Project 1</Link></ListGroup.Item>
						<ListGroup.Item className={useLink.project2 ? "active" : ""} onClick={() => setUseLink({ project2: false, project2: true, project3: false, project4: false })}><Link to="/project2" className={`text-decoration-none ${useLink.project2 ? 'text-light':'text-dark'}`}>Project 2</Link></ListGroup.Item>
						<ListGroup.Item className={useLink.project3 ? "active" : ""} onClick={() => setUseLink({ project3: false, project2: false, project3: true, project4: false })}><Link to="/project3" className={`text-decoration-none ${useLink.project3 ? 'text-light':'text-dark'}`}>Project 3</Link></ListGroup.Item>
						<ListGroup.Item className={useLink.project4 ? "active" : ""} onClick={() => setUseLink({ project4: false, project2: false, project3: false, project4: true })}><Link to="/project4" className={`text-decoration-none ${useLink.project4 ? 'text-light':'text-dark'}`}>Project 4</Link></ListGroup.Item>
					</ListGroup>
				</Col>

				<Col md={8}>
					{children}
				</Col>

			</Row >
		</Container >
	)
}