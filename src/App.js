import Nav from "./Components/Nav/Nav"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HomePage from "./Pages/HomePage/Home"
import RegisterPage from "./Pages/RegisterPage/RegisterPage"
import LoginPage from "./Pages/LoginPage/LoginPage"
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route Component={HomePage} path="/" />
          <Route Component={RegisterPage} path="/register" />
          <Route Component={LoginPage} path="/login" />
          <Route path="*" Component={<p>There is nothing here</p>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
