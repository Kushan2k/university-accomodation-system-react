
import { useState } from 'react'
import './RegisterPage.css'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConfig'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
  const navigation = useNavigate()
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

    if (inputs.password.length === 0 || inputs.confirmPassword.length === 0 || inputs.name.length === 0) {
      setErros({
        ...errors,empty:'Required!'
      })
    }

    if (inputs.password !== inputs.confirmPassword) {
      setErros({
        ...errors,doNotMatch:'Password do not match!'
      })
      return
    }

    createUserWithEmailAndPassword(auth, inputs.email, inputs.password).then((credentials) => {
      navigation('/login')
      
    }).catch((error) => {
      setCrateError(error.message)
      clearnInputs()
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
              <label htmlFor="name" className="form-label">Name</label>
              <input
                onChange={e => {
                setInputs({ ...inputs, name: e.target.value })
                }}
                type="text" autoComplete='off' value={inputs.name} className="form-control" placeholder='Name' />
              <small className=" text-danger">{ errors.empty}</small>
            </div>

            <div className="form-group my-4 mx-auto">
              <input type="submit" value="Register" className='btn btn-outline-success w-100 ' />
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
