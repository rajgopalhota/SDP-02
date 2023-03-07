import React from 'react'
import './Testride.css'
import { useAuth } from '../../Middleware/auth';
import {AutobotBackend} from './../../Middleware/Helper'
import { toast } from "react-toastify";
import axios from 'axios';

export default function Testride(props) {
    const auth = useAuth();
    const pic = props.pic;
    const name = props.name;
    const submitTestRide = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
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
                console.log(response);
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
    };
    return (
        <div>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">{name}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body" >
                    <img src={pic} class="img-fluid" alt="..." />
                    <form onSubmit={submitTestRide}>
                        <input type="email" placeholder="Enter Your Email " name='email' required />
                        <input type="tel" placeholder="Enter Your Mobile" name='phone' required />
                        <input type="date" required name='date' />
                        <input type="time" required name='time' />
                        <button type='submit' className='canvasbtn'>BOOK A RIDE</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
