import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'
import { auth } from '../../firebaseConfig'
import {signInWithEmailAndPassword} from 'firebase/auth'

function LoginPage() {

  setInterval(() => {
    setError('')
    setErros({
      empty:'',
    })
    
  },3000)
  const navigate = useNavigate()
  const [error,setError]=useState('')
  
  const [inputs, setInputs] = useState({
    email: '',
    password:''
  })
  const [errors, setErros] = useState({
    empty:'',
  })

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/')
    }
  }, [navigate])

  function login(e) {
    e.preventDefault()
    if (inputs.password.length === 0 || !inputs.password) {
      setErros({
        empty:'Required!'
      })
      return
    }
    signInWithEmailAndPassword(auth, inputs.email, inputs.password)
      .then(cred => {
        const user = cred.user
        localStorage.setItem('user', JSON.stringify(user))
        navigate("/")
      }).catch(error => {
        setError(error.message)
    })

    


    
  }
  
  return (
    <div className="container mt-5">
      <p className="text-center text-danger">{ error}</p>
      <div className="row">
        <div className="col-12 col-lg-6 mx-auto">
          <form onSubmit={login}>
            <div className="form-group my-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" value={inputs.email} onChange={e => {
                setInputs({
                  ...inputs,email:e.target.value
                })
              }} className='form-control' placeholder='Email' autoComplete='off' />
              <small className='text-danger'>{ errors.empty}</small>
            </div>
            <div className="form-group my-3">
              <label htmlFor="pass" className="form-label">Password</label>
              <input type="password" value={inputs.password} onChange={e => {
                setInputs({
                  ...inputs,password:e.target.value
                })
              }} className='form-control' placeholder='Password' autoComplete='off' />
              <small className='text-danger'>{ errors.empty}</small>
            </div>
            <div className="form-group my-2">
              <input type="submit" value="Login" className='btn btn-outline-success mb-2' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage