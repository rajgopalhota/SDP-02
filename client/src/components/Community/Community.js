import React, { useEffect } from 'react'
import './Community.css'
import admin from './Assets/profilepic.png'
import rabbit from './Assets/rabbit.png'
import userico from './Assets/man.png'
import { useState } from 'react';
import axios from 'axios'
import { useAuth } from "../auth";
import { toast } from "react-toastify";
export default function Community() {
    window.onbeforeunload = function () {
        window.scrollTo(0,0);
    };
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
                    window.location.reload();
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
            setResult(response.data.reverse());
        }).catch((error) => {
            console.log(error)
        })
    },
        []
    );

    return (

            <ul className="comment-section">
                <div>
                    <div className="starsec"></div>
                    <div className="starthird"></div>
                    <div className="starfourth"></div>
                    <div className="starfifth"></div>
                </div>
                <li className="comment user-comment">
                    <div className="info">
                        <a href="/">Admin</a>
                        <span>Always active</span>
                    </div>
                    <a className="avatar" href="/">
                        <img src={admin} width="35" alt="Profile Avatar" title="Autobot Admin" />
                    </a>
                    <p className='box'>Certainly, we will do our best to maintain discipline in the comment section.<br></br> It's important to keep the discussion civil and respectful towards others' opinions and beliefs. Thank you.</p>
                </li>
                {/* Authentication */}
                {/* {
                        !auth.user && (
                            <h1>You need to Login to post comments</h1>
                        )} */}
                {
                    // !!auth.user && (
                    <li className="write-new postingcomments">
                        <form onSubmit={handleComment}>
                            <textarea placeholder="Write your comment here" name="comment" required></textarea>
                            <div>
                                <img src={rabbit} width="35" alt="Profile" title={auth.user} />
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </li>
                    // )
                }
                {/* User comments */}
                {
                    result.map((obj, key) => (
                        <li className="comment author-comment">
                            <div className="info">
                                <a href="/">@{obj.username}</a>
                                <span>{obj.date}</span>
                            </div>
                            <a className="avatar" href="/">
                                <img src={userico} width="35" alt="Profile Avatar" title={obj.username} />
                            </a>
                            <p>{obj.message}</p>
                        </li>
                    ))
                }

            </ul>
    )
}
