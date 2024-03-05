import notfound from "../assets/notfound.jfif";
export function NotFound() {
	return (
		<div>
			<img
				src={notfound}
				alt="Not Found"
				style={{
					backgroundImage: `url(${notfound})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					width: "100vw",
					height: "100vh",
				}}
			/>
		</div>
	);
}
