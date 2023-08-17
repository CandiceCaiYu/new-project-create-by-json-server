import React, {useEffect, useState} from "react"
import { axiosRequest } from "../utils/axios/axiosUtils"

const TodoList = () => {
    const [list, setList] = useState([])
    const [inputText, setInputText] = useState()
    const handleChange = (e) => {
        setInputText(e.target?.value)
    }

    const createBook = async (text:string) => {
        const result = await axiosRequest({
            method:'post',
            url: 'http://localhost:4000/posts',
            data: {
                title: text
            }
        })
    }

    const handleAddItem = async () => {
        await createBook(inputText)
        retrieveList()
    }

    const handleDelete = async (id: string) => {
        await axiosRequest({
            method: 'delete',
            url: `http://localhost:4000/posts/${id}`,
        })
        retrieveList()
    }

    const retrieveList = async () => {
        const result = await axiosRequest({
            method:'get',
            url: 'http://localhost:4000/posts',
        })
        setList(result.data)
    }

    useEffect(() => {
        void  retrieveList()
    },[])

    return (
        <div>
        <h1>TO DO LIST</h1>
            <label>
                <input onChange={handleChange}/>
                <button onClick={handleAddItem}>ADD</button>
            </label>
            <ul>
                {list?.map(item => (
                    <li onClick={() => handleDelete(item.id)}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
