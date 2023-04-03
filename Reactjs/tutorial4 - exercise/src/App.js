import { Container, Row, Col } from 'react-bootstrap';
import Post from './components/PostHome'

function App() {
	return (
		<Container>
			<Row className="justify-content-center vh-100">
				<Col md={6} className="bg-danger text-center">
					<h1 className="text-light">What is React?</h1>
					<Post title="REACT" image="https://www.loginradius.com/blog/static/00a89fc56461ea1529439d89072c93f1/701ee/react.jpg">
						<i>"React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development."</i>
					</Post>
				</Col>

				<Col md={6} className="bg-warning text-center">
					<h1 className="text-light">What is React-Bootstrap?</h1>
					<Post title="REACT-BOOTSTRAP" image="https://www.educative.io/v2api/editorpage/5816757605367808/image/6486746733740032">
						<i>"React-Bootstrap takes the CSS framework of Bootstrap and replaces any existing JavaScript with strictly React components. This means you no longer need jQuery or other dependencies to alter JavaScript elements. Basically, the React-Bootstrap integration creates a more seamless front-end development experience by cutting out the middleman. Developers have more control over the appearance and function of the components in this model."</i>
					</Post>
				</Col>
			</Row>

		</Container>
	)
}

export default App