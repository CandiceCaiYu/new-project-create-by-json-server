import React, {useEffect, useState} from "react"
import { axiosRequest } from "../utils/axios/axiosUtils"

const TodoList = () => {
    const [list, setList] = useState([])

    const retrieveList = async () => {
        const result = await axiosRequest({
            method:'get',
            url: 'http://localhost:4000/posts'
        })
        setList(result.data)
    }

    useEffect(() => {
        void  retrieveList()
    },[])

    return (
        <div>
        <h1>TO DO LIST</h1>
            <ul>
                {list?.map(item => (
                    <li>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
