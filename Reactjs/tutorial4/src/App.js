import { Container } from 'react-bootstrap';
import BlueButton from './components/Button';
import Child from './components/Header/Child';

function App() {
	return (
		<Container>
			<BlueButton color={'success'} handler={() => alert(1)}>Hello World</BlueButton>
			<BlueButton color={'danger'} handler={() => alert(2)}>Hello World 1</BlueButton>
			<BlueButton color={'info'}>Hello World 2</BlueButton>
			<BlueButton color={'warning'}>Hello World 3</BlueButton>
			<Child username="child" />
		</Container >
	)
}

export default App

// Reusable component

/* props is object
const props = {
	username: 'Joe'
}
*/