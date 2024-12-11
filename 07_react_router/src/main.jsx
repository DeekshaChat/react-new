import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './components/Layout.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Home from './components/Home/Home.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>

//       },
//       {
//         path: 'about',
//         element: <AboutUs/>
        
//       },
//       {
//         path: 'contact',
//         element: <ContactUs/>
        
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<AboutUs/>}/>
    <Route path='contact' element={<ContactUs/>}/>
    <Route path='/:userId' element={<User/>}/>
  </Route>
  ))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
