import { useState ,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isLoggedin } from '../../utils'
import './Nav.css'
import { signOut } from 'firebase/auth'
import {auth}from '../../firebaseConfig'

import img from '../../Assets/logo.jpg'

function Nav() {

  const [loggedin, setLoggedin] = useState(false)
  const [isSubMenuOpen,setIsSubMenuOpen]=useState(false)
  const [isSubMenuOpen2, setIsSubMenuOpen2] = useState(false)
  const naviagte = useNavigate()
  
  useEffect(() => {
    if (isLoggedin()) {
      setLoggedin(true)
    }
  }, [naviagte])

  
  function opensub() {
    setIsSubMenuOpen(!isSubMenuOpen)
  }
  function opensub2() {
    setIsSubMenuOpen2(!isSubMenuOpen2)
  }

  function logout() {
    signOut(auth)
    localStorage.removeItem('user')
    naviagte('/login')
    setLoggedin(false)
  }
  

  const [isopen,setOpen]=useState(false)

  function click() {
    setOpen(!isopen)
    setIsSubMenuOpen(false)
    setIsSubMenuOpen2(false)
  }
  
  return (
    <>
      <div className='w-100 container-fluid navbar-top  d-flex justify-content-between align-content-center position-relative' style={{
        borderBottomWidth:2,
        borderBottomColor:'black',
        borderBottomStyle:'solid',
        marginBottom:1
        
      }}>
        <img src={img} width={200} height={100} alt="logo" style={{zIndex:-100}} />

        

        <div className="right-contents d-flex justify-content-around align-content-center">
          <button onClick={click} className='btn btn-outline-light btn-sm border-o '>
            <img width={50} height={40} src="https://static.thenounproject.com/png/3547976-200.png" alt="menu" />
          </button>
        </div>

      </div>
      {isopen && (
        <div  className="container position-relative menu w-75 d-flex p-5 flex-column">
          <div className="cls-btn position-absolute">
            <button onClick={click} className='btn btn-outline-light btn-sm border-o'>
              <img width={30} height={30} src="https://static.thenounproject.com/png/2130287-200.png" alt="cls" />
            </button>
          </div>
            {!loggedin && (
              <>
                <div className="nav-item">
                  <Link to={'/register'} className='nav-link' onClick={click}>Register</Link>

                </div>
                <div className="nav-item">
                  <Link to={'/login'} className='nav-link' onClick={click}>Login</Link>
                </div>
              </>
            )}
            <div className="nav-item">
              <Link className='nav-link' to={'/'} onClick={click} >Home</Link>
            </div>
            
            <div className="nav-item">
              <Link className='nav-link' to={'/future'} onClick={click} >Future Student</Link>
            </div>
            <div className="nav-item">
              <Link className='nav-link' to={'/accomodation'} onClick={click} >Accommodations</Link>
            </div>
            <div className="nav-item">
              <Link className='nav-link' to={'/service'} onClick={click} >Services</Link>
            </div>
            
            {/* <div className="nav-item">
              <span className='nav-link'>Services</span>
              <button className='btn btn-outline-light btn-sm border-o ' onClick={opensub}>
                <img width={15} height={15} src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="menu" className='border-0' />
              </button>
            </div>
            {isSubMenuOpen && (
              <div className="nav-item-collapse">
                <ul>
                  <li>Cleaning </li>
                  <li>Medical service</li>
                  <li>Clearance </li>
                  <li>Near Locations </li>
                  <li>Mentoring</li>
                  <li>IN / OUT Request</li>
                  <li>Notice Board </li>
                  <li>Other facilities </li>
                </ul>
              </div>
          )} */}
          {/* <div className="nav-item">
              <span className='nav-link'>Accommodations </span>
              <button className='btn btn-outline-light btn-sm border-o ' onClick={opensub2}>
                <img width={15} height={15} src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="menu" className='border-0' />
              </button>
            </div>
            {isSubMenuOpen2 && (
              <div className="nav-item-collapse">
                <ul>
                  <li>Details </li>
                  <li>Room Inquiries </li>
                  
                </ul>
              </div>
          )} */}
          {loggedin && (
            <>
            <div className="nav-item">
              <Link className='nav-link' onClick={logout}>Logout</Link>
            </div>
            <div className="nav-item">
            <Link className='nav-link' onClick={click} > Payments</Link>
          </div>
          </>
          )}
            
            <div className="nav-item">
              <Link className='nav-link' onClick={click} to={'/contact'} >Contact Us </Link>
            </div>
            
            
          </div>
        )}
    </>
  )
}

export default Nav