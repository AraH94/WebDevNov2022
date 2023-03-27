function Newsfeed() {
	const handleClick = () => alert('Hello world')
	const handleMousEvent = () => console.log('How are you?');
	const handleNewsData = () => {
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then(response => response.json())
			.then(json => console.log(json))
	}
	return (
		<ul>
			<li onClick={handleClick}>News1</li>
			<li onMouseOver={handleMousEvent}>News2</li>
			<li onClick={handleNewsData}>News3</li>
			<li>News4</li>
		</ul>
	)
}

export default Newsfeed