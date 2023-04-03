import { Container, Row, Col, ListGroup } from "react-bootstrap"

function App() {
	return (
		<Container>
			<h1 className="mt-4">Web Design</h1>
			<Row>

				<Col md={3} className="bg-light text-end">
					<ListGroup>
						<ListGroup.Item>Profile 1</ListGroup.Item>
						<ListGroup.Item>Profile 2</ListGroup.Item>
						<ListGroup.Item>Profile 3</ListGroup.Item>
						<ListGroup.Item>Profile 4</ListGroup.Item>
					</ListGroup>
				</Col>

				<Col md={8}>
					<Row>
						<Col md={4} className="bg-light">
							<h1 className="text-dark">Project Name</h1>
							<a href="/">Go to the website</a>
						</Col>
						<Col md={8} className="bg-light pt-3">
							<p className="text-dark">Mr. Lahmu's new big work constitutes a controlled adventurous technology that awakens the obvious dazzling...</p>
						</Col>
					</Row>
					<img src="https://picsum.photos/867/400"></img>
					<h2 className="text-dark">More screenshots of this project</h2>

					<Row className="mb-5">
						<Col md={3}>
						<img src="https://picsum.photos/206/300" className="img-project"></img>
						</Col>
						<Col md={3}>
						<img src="https://picsum.photos/206/300" className="img-project"></img>
						</Col>
						<Col md={3}>
						<img src="https://picsum.photos/206/300" className="img-project"></img>
						</Col>
						<Col md={3}>
						<img src="https://picsum.photos/206/300" className="img-project"></img>
						</Col>
					</Row>

				</Col>

			</Row>
		</Container>
	)
}

export default App