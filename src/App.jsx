import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Mainpage from './components/Mainpage'
import Login from './components/Login'
import Signup from './components/Signup'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
    </>
  )
}

export default App