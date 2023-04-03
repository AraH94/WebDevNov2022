import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import WebDesign from './web-design';
import Programming from './programming';
import './components/style/global.css'
import Footer from './components/Footer';

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
				<Route path="/web-design" element={<WebDesign />} />
				<Route path="/programming" element={<Programming />} />
			</Routes>
		</BrowserRouter>
		<Footer />
	</React.StrictMode>
	);