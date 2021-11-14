import {createAsyncThunk, createSlice,nanoid} from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import axios from 'axios'

export const GetTodo = createAsyncThunk('todo/FaceTodo', async () =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    return response.data
})
export const Addtodo = createAsyncThunk('todo/Addface', async title =>{
    const NewTodo = {
        id: nanoid(),
        title,
        completed:false

    }
    await axios.post('https://jsonplaceholder.typicode.com/todos',NewTodo)
    return NewTodo

})

const todoSlice = createSlice({
    name:'todo',
    initialState:{
        allTodo:[
            {
                id:1,
                title: 'Cong Viec 1',
                completed: false
            },
            {
                id:2,
                title: 'Cong Viec 2',
                completed: false
            },
            {
                id:3,
                title: 'Cong Viec 3',
                completed: false
            }
        ]
    },
    reducers:{
        // Addtodo:(state,action) =>{
        //     state.allTodo.push({
        //         id:nanoid(),
        //         title:action.payload,
        //         completed:false
        //     })
        // },
        ComPleted:(state,action)=>{
        //    const todoID = action.payload
            state.allTodo = state.allTodo.map(todo => {
                if(todo.id === action.payload) todo.completed = !todo.completed
                return todo
            })
        },
        DeLeTeTodo:(state,action) =>{
            state.allTodo = state.allTodo.filter(todo => todo.id !== action.payload)
        },
        // ApiTodo:(state,action) =>{
        //     state.allTodo = action.payload
        // }
        
        },
        extraReducers:{
            [GetTodo.fulfilled]:(state,action) =>{
                console.log('Done')
                state.allTodo = action.payload
            },
            [Addtodo.fulfilled]:(state,action) =>{
                state.allTodo.unshift(action.payload)
            }
        }

    
})
// reducer create
// export const GetTodo = () =>{
//     const all = async dispatch =>{
//         try {
//           const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
//           dispatch(ApiTodo(response.data))
//         } catch (error) {
//             console.log('loi')
//         }
        
//     }
//     return all
// }

//reduce
const TodoReduce = todoSlice.reducer

// Store
const store = configureStore({
    reducer:{
        GiaTriStore:TodoReduce
    }
})
export const {ComPleted,DeLeTeTodo} = todoSlice.actions
/// lay gia tri store cho component
export const todoSelector = state => state.GiaTriStore.allTodo

export default store