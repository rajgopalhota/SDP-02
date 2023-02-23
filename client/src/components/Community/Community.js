import React, { useEffect } from 'react'
import './Community.css'
import admin from './Assets/profilepic.png'
import userico from './Assets/man.png'
import { useState } from 'react';
import axios from 'axios'
import { useAuth } from "../auth";
import { toast } from "react-toastify";
export default function Community() {
    const auth = useAuth();
    const [result, setResult] = useState([]);
    const handleComment = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        axios
            .post("http://localhost:2003/api/comment", {
                username: auth.user,
                message: data.get("comment"),
            })
            .then((response) => {
                console.log(response);
                if (response.data === "success") {
                    toast.success("Success", {
                        position: "bottom-right",
                        theme: "dark",
                    });
                } else {
                    toast.info(response.data, {
                        position: "bottom-right",
                        theme: "dark",
                    });
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error("Server error");
            });
    };
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

        <div className='Community-content'>
            <ul class="comment-section">
                <li class="comment user-comment">
                    <div class="info">
                        <a href="/">Admin</a>
                        <span>Always active</span>
                    </div>
                    <a class="avatar" href="/">
                        <img src={admin} width="35" alt="Profile Avatar" title="Anie Silverston" />
                    </a>
                    <p>Please maintain dicipline and be polite</p>
                </li>
                {/* User comments */}
                {
                    result.map((obj, key) => (
                        <li class="comment author-comment">
                            <div class="info">
                                <a href="/">{obj.username}</a>
                                <span>{obj.date}</span>
                            </div>
                            <a class="avatar" href="/">
                                <img src={userico} width="35" alt="Profile Avatar" title={obj.username} />
                            </a>
                            <p>{obj.message}</p>
                        </li>
                    ))
                }
                {
                    !auth.user &&(
                        <h1>You need to Login to post comments</h1>
                    )}
                {
                    !!auth.user &&(
                    <li class="write-new">
                        <form onSubmit={handleComment}>
                            <textarea placeholder="Write your comment here" name="comment"></textarea>
                            <div>
                                <img src={userico} width="35" alt="Profile of Bradley Jones" title="Bradley Jones" />
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </li>
                    )
                }
            </ul>
        </div>
    )
}
