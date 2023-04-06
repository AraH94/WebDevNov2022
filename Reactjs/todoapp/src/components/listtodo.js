import { InputGroup, Form, Button, ListGroup } from "react-bootstrap";
import { FcSearch } from "react-icons/fc";
import { MdDeleteSweep } from "react-icons/md";

export default function ListToDo({ todo }) {
	return (
		<div>
			<InputGroup size="lg">
				<InputGroup.Text><FcSearch /></InputGroup.Text>
				<Form.Control placeholder="Search a todo" />
			</InputGroup>
			<hr />

			<ListGroup>

				{
					todo.map((item, index) => (
						<ListGroup.Item className="d-flex justify-content-between align-items-center">
							<p className="h6">{item.todo}</p>
							<MdDeleteSweep className="h2" />
						</ListGroup.Item>
					))
				}
			</ListGroup>

			<div className="d-flex flex-row-reverse">
				<Button variant="danger" className="my-2">Clear ToDos</Button>
			</div>
		</div>
	)
}

