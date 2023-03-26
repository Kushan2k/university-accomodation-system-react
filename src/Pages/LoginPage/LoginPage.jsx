import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'

function LoginPage() {
  const navigate = useNavigate()
  const [error,setError]=useState('')
  
  const [inputs, setInputs] = useState({
    email: '',
    password:''
  })

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/')
    }
  }, [])

  function login(e) {
    
  }
  
  return (
    <div>LoginPage</div>
  )
}

export default LoginPage