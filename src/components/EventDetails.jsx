import { useParams } from "react-router-dom";

import events from "../events.json";
import { Container } from "react-bootstrap";

import Details from "./Details";

function EventDetails() {
	const { name } = useParams();
	console.log(name);
	const event = events.find((event) => event.name === name);
	console.log(event);
	return (
		<>
			<Container className="mt-5 py-5 m-5">
				<Details event={event} />
			</Container>
		</>
	);
}

export default EventDetails;
