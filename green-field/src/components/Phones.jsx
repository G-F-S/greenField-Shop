import React from 'react'

const Phones = ({phones}) => {
    console.log(phones);
  return (
  <div>
  <h1 classNameNameName="fashion_taital">Phones</h1>
  
  <section className='col  col-lg-5 ' style={{backgroundColor: "#eee"}}> <div className='row' >
{phones.map((e,i)=>{ return( 
    
        

  <div className="container-fluid py-5 ">
    <div className="row">
      <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
        <div className="card">
          <div className="d-flex justify-content-between p-3">
            <p className="lead mb-0">{e.Product}</p>
           
          </div>
          <img src={e.ImageUrl}
            className="card-img-top" alt="Laptop" />
          <div className="card-body">
         

            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">Price</h5>
              <h5 className="text-dark mb-0">{e.Price}</h5>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <h5 className="mb-0">Seller</h5>
              <h5 className="text-dark mb-0">{e.User}</h5>
            </div>
            <div className="d-flex justify-content-between mb-2">
              
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>




)})}</div>
</section>

  </div>
  )
}

export default Phones