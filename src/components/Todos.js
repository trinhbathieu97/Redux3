import React from 'react'
import {useSelector} from 'react-redux'
import { todoSelector } from '../store'
import ToForm from './ToForm'
import { useDispatch } from 'react-redux'
import { ComPleted} from '../store'
import { DeLeTeTodo,GetTodo } from '../store'
import { useEffect } from 'react'



const Todos = () => {
    const todos = useSelector(todoSelector)
    const dispatch = useDispatch()

    const LatCompled = (id)=>{
        dispatch(ComPleted(id))
    }

    const deleteTodo = (abc)=>{
        dispatch(DeLeTeTodo(abc))

    }
    useEffect(()=>{
            dispatch(GetTodo())
    },[dispatch])
    
    
    
     
    return (
        <div className='todo-list'>
            <ToForm />

            <ul>
                {
                    todos.map(todo => <li key = {todo.id} className = {todo.completed ? 'completed':""}>
                        {todo.title}
                        <input type="checkbox" checked = {todo.completed} onChange = {LatCompled.bind(this, todo.id)}/>
                        <button onClick = {deleteTodo.bind(this, todo.id)}>delete</button>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default Todos
