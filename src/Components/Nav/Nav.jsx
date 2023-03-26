import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {

  const [isopen,setOpen]=useState(false)

  function click() {
    setOpen(!isopen)
  }
  return (
    <div className='w-100 container-fluid navbar-top  d-flex justify-content-between align-content-center position-relative'>
      <img src="https://arthotellagunabeach.com/wp-content/uploads/2021/12/Logo-art-hotel-laguna-Beach-og.png" alt="logo" />

      

      <div className="right-contents d-flex justify-content-around align-content-center">
        <button onClick={click} className='btn btn-outline-light btn-sm border-o '>
          <img width={50} height={40} src="https://static.thenounproject.com/png/3547976-200.png" alt="menu" />
        </button>
      </div>

      {isopen && (
        <div className="menu position-absolute bg-dark w-75 align-self-center">
          <Link to={'/register'} className='text-white mt-5'>Register</Link>
        </div>
      )}


    </div>
  )
}

export default Nav