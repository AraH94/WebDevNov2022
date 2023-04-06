import { useParams, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function TodoDetail() {

	const { id } = useParams();
	const [detail, setDetail] = useState({});
	const [searchParams, setSearchParams] = useSearchParams();
	const QueryParams = searchParams.get('short'); // You have to hard code it yourself in the URL to show it on your page
	const NewQuery = searchParams.get("anotherVariable");
	// http://localhost:3000/todo/1 > /1 => url param
	// http://localhost:3000/todo/1?short=this-is-news-link url query params

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then(res => res.json())
			.then(data => setDetail(data))


		// console.log(QueryParams)
	}, [])
	// http://localhost:3000/todo/1?short=intecbrussel&anotherVariable=microsoft
	return (
		<>
			<h1>Query Param : {QueryParams}</h1>
			<h1>Param : {id}</h1>
			{console.log(NewQuery)}
			<h1>{detail.title}</h1>
			<h1>{detail.completed}</h1>
			<h1>{detail.id}</h1>
		</>
	)
}