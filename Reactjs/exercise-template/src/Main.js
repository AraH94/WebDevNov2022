import { Row, Col, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Main({useLink, setUseLink}) {
	// const [useLink, setUseLink] = useState({
	// 	project1: false,
	// 	project2: false,
	// 	project3: false,
	// 	project4: false
	// })
	return (

		<>
			<h1 className="mt-4">Web Design</h1>
			<Row>
				<Col md={3} className="text-end">
					<ListGroup>
						<ListGroup.Item className={useLink.project1 ? "active" : ""} onClick={() => setUseLink({ project1: true, project2: false, project3: false, project4: false })}><Link to="/project1" className={`text-decoration-none ${useLink.project1 ? 'text-light' : 'text-dark'}`}>Project 1</Link></ListGroup.Item>
						<ListGroup.Item className={useLink.project2 ? "active" : ""} onClick={() => setUseLink({ project2: false, project2: true, project3: false, project4: false })}><Link to="/project2" className={`text-decoration-none ${useLink.project2 ? 'text-light' : 'text-dark'}`}>Project 2</Link></ListGroup.Item>
						<ListGroup.Item className={useLink.project3 ? "active" : ""} onClick={() => setUseLink({ project3: false, project2: false, project3: true, project4: false })}><Link to="/project3" className={`text-decoration-none ${useLink.project3 ? 'text-light' : 'text-dark'}`}>Project 3</Link></ListGroup.Item>
						<ListGroup.Item className={useLink.project4 ? "active" : ""} onClick={() => setUseLink({ project4: false, project2: false, project3: false, project4: true })}><Link to="/project4" className={`text-decoration-none ${useLink.project4 ? 'text-light' : 'text-dark'}`}>Project 4</Link></ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={9}>
					<Row>
						<Col md={4} className="bg-light">
							<h1 className="text-dark">Project Name</h1>
							<a href="/">Go to the website</a>
						</Col>
						<Col md={8} className="bg-light">
							<p className="text-dark pt-3">Mr. Lahmu's new big work constitutes a controlled adventurous technology that awakens the obvious dazzling...</p>
						</Col>
					</Row>
					<img src="https://picsum.photos/1410/400"></img>
					<h2 className="text-dark mt-5">More screenshots of this project</h2>

					<Row>
						<Col md={3}>
							<img src="https://picsum.photos/322/400" className="img-project"></img>
						</Col>
						<Col md={3}>
							<img src="https://picsum.photos/322/400" className="img-project"></img>
						</Col>
						<Col md={3}>
							<img src="https://picsum.photos/322/400" className="img-project"></img>
						</Col>
						<Col md={3}>
							<img src="https://picsum.photos/322/400" className="img-project"></img>
						</Col>
					</Row>
				</Col>
			</Row>

		</>
	)
}
