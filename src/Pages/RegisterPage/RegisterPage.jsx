
import { useState } from 'react'
import './RegisterPage.css'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfig'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
  const navigation = useNavigate()
  const [loading,setLoading]=useState(false)
  const [crateError,setCrateError]=useState('')
  setTimeout(() => {
    setErros({
      doNotMatch: '',
      tooShort: '',
      empty:''
    })
  }, 3000)
  
  function clearnInputs() {
    setInputs({
      email: '',
      password: '',
      confirmPassword: '',
      name: ''
    })
  }
  

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name:''
  })

  const [errors, setErros] = useState({
    doNotMatch: '',
    tooShort: '',
    empty:''
  })

  function submit(e) {
    e.preventDefault()
    e.target.regbtn.setAttribute('disabled', true)
    setLoading(true)

    if (inputs.password.length === 0 || inputs.confirmPassword.length === 0 || inputs.name.length === 0) {
      setErros({
        ...errors,empty:'Required!'
      })
      setLoading(false)
      e.target.regbtn.removeAttribute('disabled')
      return
    }

    if (inputs.password !== inputs.confirmPassword) {
      setErros({
        ...errors,doNotMatch:'Password do not match!'
      })
      setLoading(false)
      e.target.regbtn.removeAttribute('disabled')
      return
    }

    createUserWithEmailAndPassword(auth, inputs.email, inputs.password).then((credentials) => {
      navigation('/login')
      setLoading(false)
      
    }).catch((error) => {
      setCrateError(error.message)
      clearnInputs()
      setLoading(false)
      e.target.regbtn.removeAttribute('disabled')
    })

    
    
  }


  

  return (
    <div className="container">
      <div className="row m-0 p-0 mt-5">
        
        <div className="col-10 mx-auto col-lg-6">
          <p className="display-6 text-center">Register here</p>
          <p className='text-center text-danger'>{ crateError}</p>
          <form onSubmit={(e)=>submit(e)}>
            <div className="form-group my-4">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control"
                onChange={e => {
                setInputs({ ...inputs, email: e.target.value })
                }}
                value={inputs.email} placeholder='Email' />
            </div>

            <div className="form-group my-4">
              <label htmlFor="pass" className="form-label">Password</label>
              <input
                onChange={e => {
                setInputs({ ...inputs, password: e.target.value })
                }}
                type="password" autoComplete='off' value={inputs.password} className="form-control" placeholder='Password' />
              <small className=" text-danger">{ errors.empty}</small>
              
            </div>

            <div className="form-group my-4">
              <label htmlFor="cpass" className="form-label">Confirm Password</label>
              <input
                onChange={e => {
                setInputs({ ...inputs, confirmPassword: e.target.value })
                }}
                type="password" autoComplete='off' value={inputs.confirmPassword} className="form-control" placeholder='Confirm Password' />
              <small className=" text-danger">{ errors.doNotMatch}</small>
              <small className=" text-danger">{ errors.empty}</small>
            </div>

            <div className="form-group my-4">
              <label htmlFor="name" className="form-label">Full Name </label>
              <input
                onChange={e => {
                setInputs({ ...inputs, name: e.target.value })
                }}
                type="text" autoComplete='off' value={inputs.name} className="form-control" placeholder='Name' />
              <small className=" text-danger">{ errors.empty}</small>
            </div>

            <div className="form-group my-4">
              <label htmlFor="" className='form-label'> Student Type</label>
              <select name="" id="" className='form-control'>
                <option value="">Local</option>
                <option value="">Forign</option>
              </select>
            </div>

            <div className="form-group my-4">
              <label htmlFor="" className='form-label'>Date of Birth </label>
              <input type="date" name="" id="" className='form-control' />
            </div>

            <div className="form-group my-4">
              <label htmlFor="" className='form-label'>Gender</label>
              <select name="" id="" className='form-control'>
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>

            <div className="form-group my-4">
              <label htmlFor="name" className="form-label">National ID No</label>
              <input
                
                type="text" autoComplete='off'  className="form-control" placeholder='National ID No' />
              <small className=" text-danger">{ errors.empty}</small>
            </div>

            <div className="form-group my-4">
              <label htmlFor="name" className="form-label">Permanent Address</label>
              <input
                
                type="text" autoComplete='off'  className="form-control" placeholder='Permanent Address' />
              <small className=" text-danger">{ errors.empty}</small>
            </div>

            <div className="form-group my-4">
              <label htmlFor="name" className="form-label">Near City</label>
              <input
                
                type="text" autoComplete='off'  className="form-control" placeholder='Near City' />
              <small className=" text-danger">{ errors.empty}</small>
            </div>

            <div className="form-group my-4">
              <label htmlFor="name" className="form-label">District</label>
              <input
                
                type="text" autoComplete='off'  className="form-control" placeholder='District' />
              <small className=" text-danger">{ errors.empty}</small>
            </div>

            <div className="form-group my-4">
              <label htmlFor="name" className="form-label">Country</label>
              <input
                
                type="text" autoComplete='off'  className="form-control" placeholder='Country' />
              <small className=" text-danger">{ errors.empty}</small>
            </div>

            <div className="form-group my-4">
              <label htmlFor="name" className="form-label">Guardian Name </label>
              <input
                
                type="text" autoComplete='off'  className="form-control" placeholder='Guardian Name ' />
              <small className=" text-danger">{ errors.empty}</small>
            </div>

            <div className="form-group my-4">
              <label htmlFor="name" className="form-label">Address </label>
              <input
                
                type="text" autoComplete='off'  className="form-control" placeholder='Address ' />
              <small className=" text-danger">{ errors.empty}</small>
            </div>

            <div className="form-group my-4">
              <label htmlFor="name" className="form-label">Contact No </label>
              <input
                
                type="text" autoComplete='off'  className="form-control" placeholder='Home ' />
              <input
                
                type="text" autoComplete='off'  className="form-control" placeholder='Personal ' />
              <small className=" text-danger">{ errors.empty}</small>
            </div>

            <div className="form-group my-4">
              <label htmlFor="" className='form-label'>Academic Year </label>
              <select name="" id="" className='form-control'>
                <option value="">1 year</option>
                <option value="">2 year</option>
                <option value="">3 year</option>
                <option value="">4 year</option>
                <option value="">5 year</option>
                <option value="">6 year</option>
                <option value="">Practical Year (Final)</option>
              </select>
            </div>
            <div className="form-group my-4">
              <label htmlFor="" className='form-label'>Degree Program  </label>
              <select name="" id="" className='form-control'>
                <option value="">MBBS </option>
                <option value="">Para Medicine</option>
                
              </select>
            </div>

            <div className="form-group my-4">
              <label htmlFor="" className='form-label'>Accommodation Request Period  </label>
              <select name="" id="" className='form-control'>
                <option value="">Less than 1 mounth </option>
                <option value="">Less than 3 mounth</option>
                <option value=""> 1 year</option>
                <option value="">more than 1 year</option>
                
              </select>
            </div>
            <div className="form-group my-4">
              <label htmlFor="" className='form-label'>Mention You have any disabilities or genetic diseases to need attention  </label>
              <textarea name="" id="" cols="30" rows="5" className='form-control'></textarea>
            </div>

            





            <div className="form-group my-4 mx-auto">
              <button type="submit" name='regbtn' className='btn btn-outline-success w-100 '>
                 {
                  loading && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                
                }
                Register
                </button>
              <input type="reset" onClick={() => {
                clearnInputs()
              }} value="Reset" className='btn btn-outline-dark w-100 my-2' />
            </div>
          </form>
          <p>
            Already have an account? login <Link to={'/login'}>Here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
