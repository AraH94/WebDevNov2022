import { Container, Row, Col, Card } from 'react-bootstrap';
import Article from './components/Article';
import BlueButton from './components/Button';
import Child from './components/Header/Child';
import Post from './components/Post'

function App() {
	return (
		<Container>
			{/* <BlueButton color={'success'} handler={() => alert(1)}>Hello World</BlueButton>
			<BlueButton color={'danger'} handler={() => alert(2)}>Hello World 1</BlueButton>
			<BlueButton color={'info'}>Hello World 2</BlueButton>
			<BlueButton color={'warning'}>Hello World 3</BlueButton>
			<Child username="child" /> */}

			<Row>
				<Col md={6} className="bg-info text-light">
					<h1>Left Column</h1>
					<Post title="Post title" image="https://picsum.photos/200/300">
						Hello World This is an example post
					</Post>
				</Col>
				<Col md={6} className="bg-warning text-light">
					<h1>Right Column</h1>
					<Article title="Article title" image="https://picsum.photos/200/300?grayscale" content="Hello body"/>
				</Col>
			</Row>
		</Container >
	)
}

export default App

// Reusable component

/* props is object
const props = {
	username: 'Joe'
}

const props={
  property:1,
  property2:2,
}

function(props){
props.property1
}

function({property1}){
  property1
}

<Component property1={value}>
</Component>
*/