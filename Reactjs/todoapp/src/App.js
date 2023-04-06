import { Button, Container, Form, InputGroup, ListGroup } from 'react-bootstrap';
import MyCustomBtn from './components/button';
import { FcTodoList, FcSearch } from "react-icons/fc";
import { IoIosAddCircle } from "react-icons/io";
import { BsCardChecklist } from "react-icons/bs";
import { MdDeleteSweep } from 'react-icons/md';
import AddToDo from './components/addtodo';
import ListToDo from './components/listtodo';
import { useState, useEffect } from "react";

function App() {
	const [todo, setToDo] = useState([]);
	const [input, setInput] = useState("");

	useEffect(() => {
		fetch('http://localhost:3001/todos')
			.then(res => res.json())
			.then(data => {
				setToDo(data)
			})
	}, [])

	return (
		<Container>
			{/* <MyCustomBtn color="danger" value="Add Todo"/>
				<MyCustomBtn color="danger" value="Delete Todo"/> */}
			<div className="text-light px-3 py-4 todo-body">
				<h1 className="lead fw-bold"><FcTodoList />ToDo Application</h1>

				<AddToDo todoState={{ todo, setToDo }} inputState={{ input, setInput }} />

				<hr className="text-dark" />
				<div className="text-dark px-3 py-4 todo-body">
					<h5 className="lead fw-bold"><BsCardChecklist />ToDos</h5>
				</div>

				<ListToDo todo={todo} />

			</div>
		</Container>
	)
}
export default App