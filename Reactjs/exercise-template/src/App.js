import { Container, Row, Col, ListGroup } from "react-bootstrap"

function App() {
	return (
		<>
			<Row>
				<Col md={4} className="bg-light">
					<h1 className="text-dark">Project Name</h1>
					<a href="/">Go to the website</a>
				</Col>
				<Col md={8} className="bg-light">
					<p className="text-dark pt-3">Mr. Lahmu's new big work constitutes a controlled adventurous technology that awakens the obvious dazzling...</p>
				</Col>
			</Row>
			<img src="https://picsum.photos/867/400"></img>
			<h2 className="text-dark mt-5">More screenshots of this project</h2>

			<Row>
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

		</>
	)
}

export default App