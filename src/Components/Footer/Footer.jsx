import './Footer.css'

import React from 'react'

function Footer() {
  return (
    <div className='container-fluid' style={{
        backgroundColor:'#4d735e'
    }}>
        <div className="row text-white">
            <div className="col-12 col-md-4">
                <img src="https://johnsonconsulting.com/wp-content/uploads/2020/12/logo-placeholder-200x200-1.png" className='w-100 mx-auto' alt="logo" />
                <p className='text-center'>Copyright ©</p>
            </div>
            <div className="col-12 col-md-4" style={{
                display:'flex',
                justifyContent:'center',
                flexDirection:'column',
                alignItems:'center'
            }}>
                <h2 className="text-center mb-3">Acknowledgement of country: </h2>
                <p className="text-center">
                We acknowledge and pay respect to the Wurundjeri people of the Kulin Nation, 
                the Traditional Custodians of the land upon which our college is situated.  
                We pay our respect to all the Elders of Indigenous students who call St Hilda’s home.  
                </p>
                <p className="text-center">
                We also acknowledge all Aboriginal and Torres Strait Islander members of our community, 
                the University of Melbourne, and the wider world.
                </p>
            </div>
            <div className="col-12 col-md-4">

            </div>
        </div>
      
    </div>
  )
}

export default Footer
