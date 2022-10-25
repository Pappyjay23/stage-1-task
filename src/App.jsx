import "./App.css";
import Profile from "./pages/Profile";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<Router>
			<Profile />
		</Router>
	);
}

export default App;
