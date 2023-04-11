import React, { useState } from 'react'
import './Testride.css'
import { useAuth } from '../../Middleware/auth';
import { AutobotBackend } from './../../Middleware/Helper'
import { toast } from "react-toastify";
import Loader from './../Loader/ButtonLoad'
import axios from 'axios';

export default function Testride(props) {
    const [load, setLoad] = useState(true);
    const auth = useAuth();
    const pic = props.pic;
    const name = props.name;
    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };
    const submitTestRide = (e) => {
        e.preventDefault();
        setLoad(null);
        const data = new FormData(e.currentTarget);
        if (auth.user) {
            axios
                .post(`${AutobotBackend}/api/testride`, {
                    username: auth.user,
                    phone: data.get("phone"),
                    date: data.get("date"),
                    time: data.get("time"),
                    email: data.get("email"),
                    cartype: name
                })
                .then((response) => {
                    e.target.reset();
                    setLoad(true);
                    if (response.data === "message sent") {
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
        }
        else {
            toast.error("Please Login", {
                position: "bottom-right",
                theme: "dark",
            });
        }
    };
    return (
        <div>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">{name}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body" >
                    <img src={pic} className="img-fluid" alt="..." />
                    {
                        !auth.user &&
                        <h1>Please Login to fill form</h1>
                    }
                    {auth.user &&
                        <form onSubmit={submitTestRide}>
                            <input type="email" placeholder="Enter Your Email " name='email' required />
                            <input type="tel" placeholder="Enter Your Mobile" name='phone' required />
                            <input type="date" required name='date' min={disablePastDate()} />
                            <input type="time" required name='time' />
                            {load &&
                                <button type='submit' className='canvasbtn'>BOOK A RIDE</button>
                            }
                            {
                                !load &&
                                <Loader />
                            }
                        </form>
                    }
                </div>
            </div>
        </div>
    )
}
