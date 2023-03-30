import { Button } from "react-bootstrap";

export default function BlueButton({ children, color, handler }) {
	return <Button variant={color} onClick={handler}>{children}</Button>
}