import {useParams} from 'react-router-dom'
import {useEffect} from 'react'
export default function Project(){
    

    const {id} = useParams();

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    },[])

    return(
       <>
         <h1>Project - {id}</h1>
        <p>asdasdasd</p>
        <img/>
       </>
    )
}