import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Layout from './components/Layout';
import './style/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact';
import Blog from './Blog';
import Header from './components/Header'
import Footer from './components/Footer'

import {
BrowserRouter,
Route,
Routes
} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <Layout>
			<App />
		</Layout> */}
<BrowserRouter>
{/* <ul>
	<li><a href="/">Home</a></li>
	<li><a href="/contact">Contact</a></li>
	<li><a href="/blog">Blog</a></li>

</ul> */}
<Header/>
<Routes>
	<Route path="/" element={<App/>} />
	<Route path="/contact" element={<Contact/>} />
	<Route path="/blog" element={<Blog/>} />
</Routes>

<Footer/>
</BrowserRouter>

	</React.StrictMode>
);
