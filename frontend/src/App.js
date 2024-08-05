
import './App.css';
import Footer from './Components/layouts/Footer';
import Header from './Components/layouts/Header';
import Home from './Components/layouts/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ViewProduct from './Components/product/ViewProduct';
import SearchProduct from './Components/product/SearchProduct';
import Login from './Components/user/Login';
import Register from './Components/user/Register';
import { useEffect } from 'react';
import store from './store';
import { loadUser } from './actions/userActions';
import Profile from './Components/user/Profile';
import ProtectedRoute from './Components/route/ProtectedRoute';
import UpdateProfile from './Components/user/UpdateProfile';


function App() {

   useEffect(()=>{
     store.dispatch(loadUser)
   })

  return (
    <Router> 
    <div className="App">
      <HelmetProvider> 
        <Header/>
             <div className='container container-fluid'>
                <ToastContainer theme='dark'/>
                  <Routes>  
                      < Route path='/' element={<Home/>} />
                      < Route path='/search/:keyword' element={<SearchProduct/>} />
                      <Route path='/product/:id' element={<ViewProduct/>} />
                      <Route path='/login' element={<Login/>} />
                      <Route path='/register' element={<Register/>} />
                      <Route path='/myprofile' element={<ProtectedRoute> <Profile/></ProtectedRoute>} />
                      <Route path='/myprofile/update' element={<ProtectedRoute> <UpdateProfile/></ProtectedRoute>} />
                  </Routes>
              </div>
        <Footer/>
     </HelmetProvider>
    </div>
    </Router>
  );
}

export default App;
