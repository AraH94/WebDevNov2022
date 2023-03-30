import {Button, Card} from "react-bootstrap";

export default function Post({children, title, image}) {
	return (
		<Card style={{ width: 'auto' }}>
      <Card.Img variant="top" src={image} className="postImage"/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {children}
        </Card.Text>
        <Button variant="primary">More Info</Button>
      </Card.Body>
    </Card>
	);
}