import Event from "./Event";
import events from "../events.json";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
function Events() {
	const [showWelcome, setShowWelcome] = useState(true);
	const [searchParams, setSearchParams] = useSearchParams({});
	useEffect(() => {
		console.log(searchParams.get("name"));
		console.log(searchParams.get("id"));

		setTimeout(() => {
			setShowWelcome(false);
		}, 3000);
	}, []);

	const [show, setShow] = useState(false);
	const Buy = (event) => {
		setShow(true);
		event.nbTickets--;
		event.nbParticipants++;
		setTimeout(() => {
			setShow(false);
		}, 2000);
	};
	return (
		<Container className="mt-5 py-5 m-5">
			<Row>
				{showWelcome && (
					<Alert variant="success"> Hey welcome to ESPRIT events</Alert>
				)}
				{events.map((element, index) => {
					return (
						<Col key={index} md={4}>
							<Event event={element} Buy={Buy} />
						</Col>
					);
				})}
				{show && <Alert variant="success">You have booked an event</Alert>}
			</Row>
		</Container>
	);
}

export default Events;
