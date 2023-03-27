import { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { isLoggedin } from '../../utils'
import './Nav.css'

function Nav() {

  const [loggedin, setLoggedin] = useState(false)
  const [isSubMenuOpen,setIsSubMenuOpen]=useState(false)
  const [isSubMenuOpen2,setIsSubMenuOpen2]=useState(false)
  
  useEffect(() => {
    if (isLoggedin()) {
      setLoggedin(true)
    }
  }, [])

  function opensub() {
    setIsSubMenuOpen(!isSubMenuOpen)
  }
  function opensub2() {
    setIsSubMenuOpen2(!isSubMenuOpen2)
  }
  

  const [isopen,setOpen]=useState(false)

  function click() {
    setOpen(!isopen)
    setIsSubMenuOpen(false)
  }
  return (
    <>
      <div className='w-100 container-fluid navbar-top  d-flex justify-content-between align-content-center position-relative'>
        <img src="https://arthotellagunabeach.com/wp-content/uploads/2021/12/Logo-art-hotel-laguna-Beach-og.png" alt="logo" />

        

        <div className="right-contents d-flex justify-content-around align-content-center">
          <button onClick={click} className='btn btn-outline-light btn-sm border-o '>
            <img width={50} height={40} src="https://static.thenounproject.com/png/3547976-200.png" alt="menu" />
          </button>
        </div>

        

        


      </div>
      {isopen && (
          <div className="container menu w-75 d-flex p-5 flex-column">
            {!loggedin && (
              <>
                <div className="nav-item">
                  <Link to={'/register'} className='nav-link'>Register</Link>

                </div>
                <div className="nav-item">
                  <Link to={'/login'} className='nav-link'>Login</Link>
                </div>
              </>
            )}
            <div className="nav-item">
              <span className='nav-link'>More</span>
              <button className='btn btn-outline-light btn-sm border-o ' onClick={opensub}>
                <img width={15} height={15} src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="menu" className='border-0' />
              </button>
            </div>
            {isSubMenuOpen && (
              <div className="nav-item-collapse">
                <ul>
                  <li>test 01</li>
                  <li>test 02</li>
                  <li>test 03</li>
                  <li>test 04</li>
                  <li>test 05</li>
                </ul>
              </div>
          )}
          <div className="nav-item">
              <span className='nav-link'>More</span>
              <button className='btn btn-outline-light btn-sm border-o ' onClick={opensub2}>
                <img width={15} height={15} src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="menu" className='border-0' />
              </button>
            </div>
            {isSubMenuOpen2 && (
              <div className="nav-item-collapse">
                <ul>
                  <li>test 01</li>
                  <li>test 02</li>
                  <li>test 03</li>
                  <li>test 04</li>
                  <li>test 05</li>
                </ul>
              </div>
            )}
            
            
          </div>
        )}
    </>
  )
}

export default Nav