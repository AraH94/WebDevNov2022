import {Button, Card} from "react-bootstrap";

export default function Post({children, title, image}) {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src={image} />
			<Card.Body>
				<Card.Title className="text-dark">{title}</Card.Title>
				<Card.Text className="text-dark">
					{children}
				</Card.Text>
				<Button variant="primary">Read More</Button>
			</Card.Body>
		</Card>
	);
}