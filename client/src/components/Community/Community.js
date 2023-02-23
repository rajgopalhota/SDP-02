import React, { useEffect } from 'react'
import './Community.css'
import userico from './profilepic.png'
import { useState } from 'react';
import axios from 'axios'
export default function Community() {
    // const [result, setResult] = useState([]);
    // useEffect(() => {
    //     axios.get("http://localhost:2003/api/community", {
    //         params: {}
    //     }).then((response) => {
    //         console.log(response.data);
    //         setResult(response.data);
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // },
    //     []
    // );
    // result.map((obj, key) => (
    //     <tr key={obj._id}>
    //         <td>{obj.username}</td>
    //         <td>{obj.time}</td>
    //         <td>{obj.city}</td>
    //         <td><button>Delete</button></td>
    //     </tr>
    // ))

    return (

        <div>
            <ul class="comment-section">
                <li class="comment user-comment">
                    <div class="info">
                        <a href="/">Admin</a>
                        <span>Always active</span>
                    </div>
                    <a class="avatar" href="/">
                        <img src={userico} width="35" alt="Profile Avatar" title="Anie Silverston" />
                    </a>
                    <p>Please maintain dicipline and be polite</p>
                </li>
                {/* User comments */}
                <li class="comment author-comment">
                    <div class="info">
                        <a href="/">Jack Smith</a>
                        <span>3 hours ago</span>
                    </div>
                    <a class="avatar" href="/">
                        <img src={userico} width="35" alt="Profile Avatar" title="Jack Smith" />
                    </a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida sem sit amet molestie portitor.</p>
                </li>

                <li class="write-new">

                    <form action="#" method="post">

                        <textarea placeholder="Write your comment here" name="comment"></textarea>

                        <div>
                            <img src={userico} width="35" alt="Profile of Bradley Jones" title="Bradley Jones" />
                            <button type="submit">Submit</button>
                        </div>

                    </form>

                </li>

            </ul>
        </div>
    )
}
