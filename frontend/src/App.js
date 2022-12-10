import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NewDevice from './pages/NewDevice'
import Devices from './pages/Devices'
import Device from './pages/Device'
import Footer from './components/Layout/Footer'
// import Footer from './components/Layout/Footer'
import NavBar from './components/Layout/NavBar'
// NOTE: Here we have removed the nested routing as the path is the same

function App() {
  return (
    <>
      <Router>
        {/* <div className='container'> */}
        <div className='flex flex-col justify-between h-screen'>
          {/* <Header /> */}
          {/* <NavBar /> */}

          <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            
            <Route
              path='/new-device'
              element={
                <PrivateRoute>
                  <NewDevice />
                </PrivateRoute>
              }
            />
            <Route
              path='/devices'
              element={
                <PrivateRoute>
                  <Devices />
                </PrivateRoute>
              }
            />
            <Route
              path='/device/:deviceId'
              element={
                <PrivateRoute>
                  <Device />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
       
     <Footer />
     </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
