import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Userdata from './components/Userdata'
import Navbar from './components/Navbar'
import Edit from './Edit'


const App = () => {
  return (
    <>
      <h1 className='bg-dark text-light p-3 text-center'>crud operaion</h1>

      <Router>
          <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/userdata' element={<Userdata/>}></Route>
          <Route path='/edit/:id' element={<Edit/>}></Route>
          {/* Fallback routing  */}
          <Route path='*' element={<Home/>}></Route>
        </Routes>
      </Router>

    </>
  )
}

export default App