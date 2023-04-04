import Header from "./components/Header/header";
import Main from "./components/Header/Main";
import Breakfast from "./components/Header/pages/breakfast";
import Lunch from "./components/Header/pages/lunch";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/breakfast" element={<Breakfast />} />
				<Route path="/lunch" element={<Lunch />} />
			</Routes>
		</BrowserRouter>
	)
}