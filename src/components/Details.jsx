import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

function Details(props) {
	const [event, setEvent] = useState(props.event);
	const src =
		event.nbTickets === 0
			? " images/sold_out.png"
			: `../../public/images/${event.img}`;
	console.log("src", src);
	return (
		<Card>
			<Row>
				<Col>
					<Card.Img variant="top" src={src} height={250} />
				</Col>
				<Col>
					<Card.Body>
						<Card.Title>{event.name}</Card.Title>

						<Card.Text> Description : {event.description}</Card.Text>
						<Card.Text>Price : {event.price}</Card.Text>
					</Card.Body>
				</Col>
			</Row>
		</Card>
	);
}

export default Details;
