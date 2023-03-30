import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './Blog';
import Contact from './Contact';
import About from './About';
import Header from './components/Header'
import './components/style/global.css'

import {
	BrowserRouter,
	Route,
	Routes
} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/Blog" element={<Blog />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="/About" element={<About />} />
			</Routes>

		</BrowserRouter>

	</React.StrictMode>
);