import React,{useState}from 'react'
import { Addtodo } from '../store'
import { useDispatch } from 'react-redux'

const ToForm = () => {
    const dispatch = useDispatch()
    const [title,setTitle] = useState("")

    const GiatriNhap = (event)=>{
        setTitle(event.target.value)
    }
    const NhapGiaTri = (event)=>{
        event.preventDefault()
        dispatch(Addtodo(title))
        setTitle('')
    }

    return (
        <div>
            <form onSubmit = {NhapGiaTri}>
                <input type="text"  required value={title} onChange={GiatriNhap}/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default ToForm
