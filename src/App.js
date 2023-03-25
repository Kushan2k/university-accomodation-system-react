import Nav from "./Components/Nav/Nav"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HomePage from "./Pages/HomePage/Home"
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route Component={HomePage} path="/" />
        </Routes>
      </Router>
    </div>
  )
}

export default App
