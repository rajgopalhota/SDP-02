import React from 'react'
import Slider from '../ImageGallery/Slider'
import './Styles/Homestyle.css'
export default function Home() {
  return (
    <div>
      <Slider />
      <div className="home-container-portfolio">
        <h1>Welocme to Autobots</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem maiores autem voluptatibus saepe quod illo vitae repellendus ex at inventore deleniti, dolore ducimus, nam libero expedita eius vero sunt odio.
          Tenetur ducimus doloribus, totam deleniti temporibus voluptas, laudantium eos maiores dolore nesciunt, beatae impedit iure labore eligendi laborum consequuntur quaerat ullam veritatis. Error deserunt quas temporibus dolorum dolores incidunt in.
          Ipsa rem explicabo optio corporis incidunt voluptates neque animi, nam sint, rerum nulla minima distinctio pariatur voluptate minus quae commodi consequatur error quibusdam totam fugit. Blanditiis, doloribus. Ab, suscipit a.
          Enim velit soluta saepe cumque, provident illum ducimus tempore voluptatum, nisi molestias minima cupiditate omnis temporibus, dignissimos tenetur voluptates dolorum ab adipisci blanditiis nam ipsa possimus amet. Laudantium, eum dolorem.
        </p>
      </div>
      <div className="home-container-portfolio">
        <h1>Frequently asked questions(FAQ's)</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem maiores autem voluptatibus saepe quod illo vitae repellendus ex at inventore deleniti, dolore ducimus, nam libero expedita eius vero sunt odio.
          Tenetur ducimus doloribus, totam deleniti temporibus voluptas, laudantium eos maiores dolore nesciunt, beatae impedit iure labore eligendi laborum consequuntur quaerat ullam veritatis. Error deserunt quas temporibus dolorum dolores incidunt in.
          Ipsa rem explicabo optio corporis incidunt voluptates neque animi, nam sint, rerum nulla minima distinctio pariatur voluptate minus quae commodi consequatur error quibusdam totam fugit. Blanditiis, doloribus. Ab, suscipit a.
          Enim velit soluta saepe cumque, provident illum ducimus tempore voluptatum, nisi molestias minima cupiditate omnis temporibus, dignissimos tenetur voluptates dolorum ab adipisci blanditiis nam ipsa possimus amet. Laudantium, eum dolorem.
        </p>
      </div>
      {/* Social */}
      <main>
          <div className="wrapper">
            <a href="/" className="icon facebook">
              <div className="tooltip">Facebook</div>
              <span><i className="fab fa-facebook-f"></i></span>
            </a>
            <a href="/" className="icon twitter">
              <div className="tooltip">Twitter</div>
              <span><i className="fab fa-twitter"></i></span>
            </a>
            <a href="/" className="icon instagram">
              <div className="tooltip">Instagram</div>
              <span><i className="fab fa-instagram"></i></span>
            </a>
            <a href="/" className="icon github">
              <div className="tooltip">Github</div>
              <span><i className="fab fa-github"></i></span>
            </a>
            <a href="/" className="icon youtube">
              <div className="tooltip">Youtube</div>
              <span><i className="fab fa-youtube"></i></span>
            </a>
          </div>
      </main>
    </div>
  )
}
