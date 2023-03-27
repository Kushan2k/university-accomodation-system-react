import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginPage.css'
import { auth } from '../../firebaseConfig'
import {signInWithEmailAndPassword} from 'firebase/auth'

function LoginPage() {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [isloading,setIsloading]=useState(false)
  
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
    e.target.sbbtn.setAttribute('disabled',true)
    setIsloading(true)
    if (inputs.password.length === 0 || !inputs.password) {
      setErros({
        empty:'Required!'
      })
      setIsloading(false)
      e.target.sbbtn.removeAttribute('disabled')
      return
    }
    
    signInWithEmailAndPassword(auth, inputs.email, inputs.password)
      .then(cred => {
        const user = cred.user
        localStorage.setItem('user', JSON.stringify(user))
        navigate("/")
      }).catch(error => {
        setIsloading(false)
        setError(error.message)
        e.target.sbbtn.removeAttribute('disabled')
    })

    


    
  }
  
  return (
    <div className="container mt-5">
      <p className="text-center text-danger">{ error}</p>
      <div className="row">
        <div className="col-10 col-lg-6 mx-auto">
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
              <button type="submit" name='sbbtn' className='btn btn-outline-success mb-2'>
                {
                  isloading && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                
                }
                  Login
              </button>
            </div>
          </form>
          <p>
            New here? you can register <Link to={'/register'}>here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage