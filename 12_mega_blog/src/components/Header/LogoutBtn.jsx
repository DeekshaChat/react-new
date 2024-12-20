import React from 'react';
import authService from '../../appwrite/auth';
import {useDispatch} from 'react-redux';
import { logout } from '../../store/authSlice';


export default function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then((res) => {
            dispatch(logout());
        }).catch(error => {
            console.log('Logout btn: ', error);
            
        })
    }

  return (
    <>
      <button 
      className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
      onClick={logoutHandler}>Logout</button>
    </>
  )
}