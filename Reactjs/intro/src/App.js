import Profile from './components/Profile'
import Dog_logo from './logo.png'
import { drink, food } from './utilities/Actions'

function App() {
	// variable
	// functions
	// other data need to be defined here
	const message = "Hello You"
	const numbers = [1, 2, 3, 4, 5]
	// const users = { username: 'root' }
	const allUsers = [{ username: 'admin' }, { username: 'root' }]
	const users = [
		{username: 'Jack'},
		{username: 'Rose'}
	]

	const GetMessage = () => {
		return (
			<h1>This is an other message</h1>
		)
	}

	return (
		<>
			{/* <h1>Hello World</h1>
			<h1>This is an other message</h1>
			<img src={Dog_logo} width={300} />
			<img src="/dog.png" width={300} />

			<h1>{message}</h1>
			<h1>{numbers}</h1>
			<h1>{users.username}</h1> */}

			{ /*{
				allUsers.map((user, index) =>{
					return(
						<h1>{user.username}</h1>
					)
				})
			}*/}

			{/* <h1>{4 + 4}</h1>
			<h1>{'Hello'}</h1> */}
			{/* <h1>{alert(8)}</h1> */}

			{/* {
				allUsers.map((user, index) => (
					<h1>{user.username}</h1>
				))
			}
 */}
			{/* <GetMessage /> */}

			{/* <h1>{drink} & {food}</h1> */}

			{/* <Profile drink={"Royal"} />
			<Profile numbers={88} /> */}
			<Profile myname="Joe Dalton" programming="c++" python="flask" users={[{ username: 'root' }, { username: 'admin' }]} />
			<Profile myname="Joe Dalton" programming="c++" python="flask" users={[{ username: 'Lucas' }, { username: 'Nathan' }]} />
			<Profile myname="Joe Dalton" programming="c++" python="flask" users={users}/>

		</>
	)
}

export default App