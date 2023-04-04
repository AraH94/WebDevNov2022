import Header from './components/Header'
import Footer from './components/Footer';
import Main from './Main';

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

import Programming from './programming';
import WebDesign from './web-design';

import { useState } from 'react';

function App() {
	const [useLink, setUseLink] = useState({
		project1: false,
		project2: false,
		project3: false,
		project4: false
	})
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Main useLink={useLink} setUseLink={setUseLink} />} />
					<Route path="/web-design" element={<WebDesign />} />
					<Route path="/programming" element={<Programming />} />

					<Route path="/project1" element={<Project1 useLink={useLink} setUseLink={setUseLink}/>} />
					<Route path="/Project2" element={<Project2 useLink={useLink} setUseLink={setUseLink}/>} />
					<Route path="/Project3" element={<Project3 useLink={useLink} setUseLink={setUseLink}/>} />
					<Route path="/Project4" element={<Project4 useLink={useLink} setUseLink={setUseLink}/>} />
				</Routes>
				<Footer />
			</BrowserRouter>

		</>
	)
}

export default App