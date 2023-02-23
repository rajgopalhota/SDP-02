import React, { useEffect } from 'react'
import './Community.css'
import { useState } from 'react';
import axios from 'axios'
export default function Community() {
    const [result, setResult] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:2003/api/community", {
            params: {}
        }).then((response) => {
            console.log(response.data);
            setResult(response.data);
        }).catch((error) => {
            console.log(error)
        })
    },
    []
    );


    return (
        <div>
            <table border="1">
                <tr>
                    <th>PID</th>
                    <th>PNAME</th>
                    <th>PRICE</th>
                    <th>ACTIONS</th>
                </tr>
                {
                    result.map((obj, key) => (
                        <tr key={obj._id}>
                            <td>{obj.username}</td>
                            <td>{obj.time}</td>
                            <td>{obj.city}</td>
                            <td><button>Delete</button></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
