import React, { Suspense } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import NavigationBar from "./components/NavigationBar";
const Products = React.lazy(() => import("./components/Products"));
const Events = React.lazy(() => import("./components/Events"));
const EventDetails = React.lazy(() => import("./components/EventDetails"));

function App() {
	
	return (
		<>
			<Suspense fallback={<h1>Loading</h1>}>
				<NavigationBar />
				<Routes>
					<Route path="/events">
						<Route index element={<Events />} />{" "}
						<Route path=":name" element={<EventDetails />} />
					</Route>
					<Route path="/products" element={<Products />} />
					<Route path="/counter" element={<Counter />} />

					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
