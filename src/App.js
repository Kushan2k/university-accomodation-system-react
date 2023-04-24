import Nav from "./Components/Nav/Nav"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HomePage from "./Pages/HomePage/Home"
import RegisterPage from "./Pages/RegisterPage/RegisterPage"
import LoginPage from "./Pages/LoginPage/LoginPage"
// import Footer from "./Components/Footer/Footer"
import ServicePage from './Pages/ServicePage/ServicePage.jsx'
import FuturePage from './Pages/FutureStudentPage/FutureStudentPage'
import ContactUsPage from './Pages/ContactUsPage/ContactUsPage'
import AccomodationPage from './Pages/Accomadation/Accomadation'
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route Component={HomePage} path="/" />
          <Route Component={RegisterPage} path="/register" />
          <Route Component={LoginPage} path="/login" />
          <Route Component={ServicePage} path="/service" />
          <Route Component={FuturePage} path="/future" />
          <Route Component={ContactUsPage} path="/contact" />
          <Route Component={AccomodationPage} path="/accomodation" />
          <Route path="*" Component={<p>There is nothing here</p>} />
        </Routes>
        
      </Router>
    </div>
  )
}

export default App
