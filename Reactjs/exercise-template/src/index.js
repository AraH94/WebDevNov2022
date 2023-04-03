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
import Layout from './components/layout';
import Project1 from './components/pages/project1';
import Project2 from './components/pages/project2';
import Project3 from './components/pages/project3';
import Project4 from './components/pages/project4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Layout>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/project1" element={<Project1 />} />
					<Route path="/Project2" element={<Project2 />} />
					<Route path="/Project3" element={<Project3 />} />
					<Route path="/Project4" element={<Project4 />} />
				</Routes>
			</Layout>
		</BrowserRouter>
		<Footer />
	</React.StrictMode>
);