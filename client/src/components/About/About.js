import React from 'react'
import './Style.css'
import rajpic from './images/my pic.jpg'
import gopalpic from "./images/gopalpic.jpg"
import manojpic from "./images/manoj.jpg"
export default function About() {
  return (
    <div className='Aboutani'>
      <div className="abt-container">
        <img src={gopalpic} alt=""></img>
        <a href="https://www.linkedin.com/in/rajgopalhota/" target="_blank" rel="noreferrer">RAJGOPAL HOTA</a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam provident iste quibusdam blanditiis explicabo, sed laborum molestiae debitis aliquam, accusamus necessitatibus, placeat in ex eligendi nemo soluta. Accusantium, illo.
        </p>
      </div>
      <div className="abt-container1">
        <img src={rajpic} alt=""></img>
        <a href="https://www.linkedin.com/in/raja-esha-hari-shanmuka-rajendra-772689248/" target="_blank" rel='noreferrer'>RAJA RAJENDRA</a>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam provident iste quibusdam blanditiis explicabo, sed laborum molestiae debitis aliquam, accusamus necessitatibus, placeat in ex eligendi nemo soluta. Accusantium, illo.
        </p>
      </div>
      <div className="abt-container2">
        <img src={manojpic} alt=""></img>
        <a href="https://www.linkedin.com/in/manojnaraharisetti/" target="_blank" rel="noreferrer">NARAHARISETTI MANOJ</a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam provident iste quibusdam blanditiis explicabo, sed laborum molestiae debitis aliquam, accusamus necessitatibus, placeat in ex eligendi nemo soluta. Accusantium, illo.
        </p>
      </div>
    </div>
  )
}
