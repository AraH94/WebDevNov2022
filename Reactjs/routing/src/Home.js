import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
function Home() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])
    return (
        <div>
            <h1>homepage</h1>
            {/* <div class="codegena_iframe">
                <iframe src="https://menu-exercise-react.netlify.app" height={"400"} width={"100%"} frameBorder={0} title="menu demo link"></iframe></div> */}
            <ul>

                {
                    todos.map((todo, index) => (
                        <li key={index}><Link to={`/todo/${todo.id}`}>{todo.title}</Link></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Home