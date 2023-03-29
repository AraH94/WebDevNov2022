import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Layout from './components/layout';
// import Search from './components/search'
import './style/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import SearchBar from './components/searchBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Layout>
			<App />
			{/* <Search />
			<SearchBar /> */}
		</Layout>

	</React.StrictMode >
);
