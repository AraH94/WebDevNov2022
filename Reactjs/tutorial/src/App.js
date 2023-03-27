// shortcut rfce

import Newsfeed from "./components/newsfeed"
import Header from "./components/header"
import Footer from "./components/footer"


function App() {
	const handleInput = (e) => {
		console.log(e.target.value);
	}
	return (
		<div>
			<Header />
			<Newsfeed />
			<input type='text' onKeyDown={handleInput} />
			{/* {forEach or map or other array methods} */}
			{
				true ? 'yes' : 'no'
			}
			<Footer />
		</div>
	)
}

export default App