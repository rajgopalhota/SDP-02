import React, { useEffect } from 'react'
import './Community.css'
import admin from './Assets/profilepic.png'
import rabbit from './Assets/typo.gif'
import Male from './Assets/man.png'
import Female from './Assets/woman.png'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import Loader from './../Loader/Loader'
import axios from 'axios'
import { useAuth } from "../../Middleware/auth";
import { toast } from "react-toastify";
import { AutobotBackend } from './../../Middleware/Helper'

export default function Community() {
    function currentDateTime() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        var currentOffset = today.getTimezoneOffset();
        var ISTOffset = 330;   // IST offset UTC +5:30 
        var ISTTime = new Date(today.getTime() + (ISTOffset + currentOffset) * 60000);
        var hoursIST = ISTTime.getHours()
        var minutesIST = ISTTime.getMinutes()
        const currentDate = dd + "-" + mm + "-" + yyyy + " at " + hoursIST + ":" + minutesIST;
        return currentDate;
    }
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
    const auth = useAuth();
    const [result, setResult] = useState(null);
    const handleComment = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        e.target.reset();
        axios
            .post(`${AutobotBackend}/api/comment`, {
                username: auth.user,
                message: data.get("comment"),
                date: currentDateTime()
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
        axios.get(`${AutobotBackend}/api/community`, {
            params: {}
        }).then((response) => {
            console.log(response.data);
            setResult(response.data.reverse());
        }).catch((error) => {
            console.log(error)
        })
    },
        [result]
    );

    return (
        <>
            <NavLink to="/autobots/home">
                <div className="navigatetohome">
                    <i className="fa fa-home" aria-hidden="true"></i>
                </div>
            </NavLink>
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
                {
                    !auth.user && (
                        <h1>You need to Login to post comments</h1>
                    )}
                {
                    !!auth.user && (
                        <li className="write-new postingcomments">
                            <form onSubmit={handleComment}>
                                <textarea placeholder="Write your comment here" name="comment" required></textarea>
                                <div>
                                    <img src={rabbit} width="35" alt="Profile" title={auth.user} />
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </li>
                    )
                }
                {/* User comments */}
                {
                    result ? (
                        result.map((obj, key) => (
                            <li className="comment author-comment" key={key} >
                                <div className="info">
                                    <a href="/">@{obj.username}</a>
                                    <span>{obj.date}</span>
                                </div>
                                <a className="avatar" href="/">
                                    <img src={obj.gender === "Male" ? Male : Female} width="35" alt="Profile Avatar" title={obj.username} />
                                </a>
                                <p>{obj.message}</p>
                            </li>
                        ))
                    ) : <Loader />
                }

            </ul>
        </>
    )
}
