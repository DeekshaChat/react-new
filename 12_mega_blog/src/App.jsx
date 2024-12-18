// import './App.cs'
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router';

function App() {
const [isLoading, setIsLoading] = useState(true);

const dispatch = useDispatch();

useEffect(() => {
  authService.getCurrentUser().
    then((userData) => {
      if (userData) {
        dispatch(login(userData));
        
      } else {
        dispatch(logout());
      }
    }).catch(error => {
      console.log('App.jsx error', error);
      dispatch(logout());
      
    }).
    finally(() => {
      setIsLoading(false);
    });
}, [])


  if (isLoading) {
    return null;
    
  } else {
   return <div className='min-h-screen bg-gray-400 flex flex-wrap content-between'>
    <div className='w-full block'>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
   </div>
  }
  }

export default App
