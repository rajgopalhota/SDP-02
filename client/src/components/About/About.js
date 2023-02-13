import React from 'react'
import {Link} from 'react-router-dom'
import './Style.css'
import rajpic from './images/my pic.jpg'
import gopalpic from "./images/gopal1.jpg"
import manojpic from "./images/manoj.jpg"
export default function About() {
  return (
    <div className='Aboutani'>
      <div className="abt-container">
      <img src={gopalpic} alt=""></img>
        <Link to="">RAJGOPAL HOTA</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam provident iste quibusdam blanditiis explicabo, sed laborum molestiae debitis aliquam, accusamus necessitatibus, placeat in ex eligendi nemo soluta. Accusantium, illo.
        </p>
      </div>
      <div className="abt-container1">
      <img src={rajpic} alt=""></img>
        <Link to="">RAJA RAJENDRA</Link>
        
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam provident iste quibusdam blanditiis explicabo, sed laborum molestiae debitis aliquam, accusamus necessitatibus, placeat in ex eligendi nemo soluta. Accusantium, illo.
        </p>
      </div>
      <div className="abt-container2">
      <img src={manojpic} alt=""></img>
        <Link to="">NARAHARISETTI MANOJ</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam provident iste quibusdam blanditiis explicabo, sed laborum molestiae debitis aliquam, accusamus necessitatibus, placeat in ex eligendi nemo soluta. Accusantium, illo.
        </p>
      </div>
    </div>
  )
}
