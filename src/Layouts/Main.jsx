import { Link } from "react-router-dom"

// SIMPLE MAIN LAYOUT FROM APP ROUTE
const Main = ({ children }) => {
	return (
		<div>
			<div>
				<h6>MENU</h6>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/article">Article</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/profile">Profile</Link>
					</li>
				</ul>
			</div>
			{children}
		</div>
	)
}

export default Main
