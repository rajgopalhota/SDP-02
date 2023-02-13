import React from 'react'
import "./Styles/Spare.css"
export default function Spare() {
    return (
        // <div>
        //     <div className="home-container">
        //         <h1>Spare parts</h1>
        //         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem maiores autem voluptatibus saepe quod illo vitae repellendus ex at inventore deleniti, dolore ducimus, nam libero expedita eius vero sunt odio.
        //             Tenetur ducimus doloribus, totam deleniti temporibus voluptas, laudantium eos maiores dolore nesciunt, beatae impedit iure labore eligendi laborum consequuntur quaerat ullam veritatis. Error deserunt quas temporibus dolorum dolores incidunt in.
        //             Ipsa rem explicabo optio corporis incidunt voluptates neque animi, nam sint, rerum nulla minima distinctio pariatur voluptate minus quae commodi consequatur error quibusdam totam fugit. Blanditiis, doloribus. Ab, suscipit a.
        //             Enim velit soluta saepe cumque, provident illum ducimus tempore voluptatum, nisi molestias minima cupiditate omnis temporibus, dignissimos tenetur voluptates dolorum ab adipisci blanditiis nam ipsa possimus amet. Laudantium, eum dolorem.
        //         </p>
        //     </div>
        // </div>
        <div>
      <div className="spare-container">
        {/* <h1>Welocme to Autobots Repair Services</h1> */}
        <form action="" method="post">
        <table>
          <tr>
            <td>
            <select name = "dropdown" id='spare-dropdown'>
            <option value = "company" selected>company</option>
            <option value = "tata">Tata</option>
            <option value = "benz">Benz</option>
            <option value = "audi">Audi</option>
         </select>
            </td>
            <td>
              <input type="text" name="text" placeholder='Model'/>
            </td>
            <td>
            <button className="btn">GO</button>
            </td>
          </tr>
          
        
          
        
          
          
          
         
          
          
         
         

          
        </table>
        
        </form>
      </div>
    </div>
    )
}
