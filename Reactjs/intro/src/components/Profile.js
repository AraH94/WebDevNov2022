import { newsAll, newsById, GetNewsDetail } from '../utilities/newsAction'
// function Profile() {
// 	return (
// 		<ul>
// 			<li>Test1</li>
// 			<li>Test2</li>
// 			<li>Test3</li>
// 		</ul>
// 	)
// }

// export default Profile;

export default function Profile(props) {
	return (
		<ul>
			<li>Test1</li>
			<li>Test2</li>
			<li>Test3</li>
			<h1>{props.drink}</h1>
			{/* <h1>{drink}</h1>
			<h1>{numbers}</h1>
			<h1>{y}</h1> */}
			{
				console.log(props, "Props data result")
			}

			{
				props.users.map((user, index) => ( // map creates a new array
					<li key={index}>
						{user.username}
					</li>
				))
			}

			{
				newsAll()
			}
			{
				newsById()
			}
			{
				GetNewsDetail()
			}
		</ul>
	)
}