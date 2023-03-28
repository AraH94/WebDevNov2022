import { useState } from "react"

function Profile() {
	return (
		<h1>Profile</h1>
	)
}

function Posts({ singlePost }) {
	return (
		<ul>
			<li>{singlePost.title}</li>
		</ul>
	)
}

function App() {
	const [state, setState] = useState([]) // empty array as default
	const [isClicked, setIsClicked] = useState(false)
	const [username, setUsername] = useState(undefined)
	const test = "This is a test"
	// const data = [] // array data to store posts
	const ClickHandler = () => { // handling click event
		fetch('https://jsonplaceholder.typicode.com/posts') // fetching JSON data from URL
			.then(res => res.json())
			.then(posts => {
				// console.log(posts)
				// data.push(posts)
				// setUsername('Dummy Data')
				setIsClicked(!isClicked)

				setTimeout(() => {
					setUsername(['a', 'b', 'c', 'd']) // save-set items
					setState(posts) // DATA PUSH
					setIsClicked(false) // 
				}, 3000)
			})
	}
	return (
		<div>
			{/* <Profile /> */}
			<button onClick={ClickHandler}>Get Posts</button>
			{/* {console.log(data)} */}
			{console.log(state)}
			<h1>
				{/* {
					username ?
						username.map((user, index) => (
							<h1 key={index}>{user}</h1>
						))
						: // ternary operator
						"Loading..."
				} */}
				{
					isClicked ?
						'Loading...'
						:
						username ?
							username.map((user, index) => {
								return <h1 key={index}>{user}</h1>
							})
							:
							''
				}
			</h1>

			{
				state.map((post, index) => (
					<Posts singlePost={post} key={index} />
				))
			}

		</div>
	)
}

export default App

// Props is object in react. An object that is used to share data. Any component can you use props
// Component is a function, but not every function is a component. We put this in the src folder