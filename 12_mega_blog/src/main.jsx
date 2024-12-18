import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { createBrowserRouter, Router } from 'react-router';
import Home from '../../07_react_router/src/components/Home/Home.jsx';
import AuthLayout from './components/AuthLayout.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import AddPost from './pages/AddPost.jsx';
import AllPosts from './pages/AllPosts.jsx';
import EditPost from './pages/EditPost.jsx';
import { RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path:'/login',
        element: (
          <AuthLayout authentication={false}>
            <Login/>
          </AuthLayout>
        )
      },
      {
        path: '/signup',
        element: (
          <AuthLayout authentication={false}>
            <Signup/>
          </AuthLayout>
        )
      },
      {
        path:'/all-posts',
        element: (
          <AuthLayout authentication>
            {" "}
            <AllPosts/>
          </AuthLayout>
        )
      },
      {
        path: '/add-post',
        element: (
          <AuthLayout authentication>
            {" "}
            <AddPost/>
          </AuthLayout>
        )
      },
      {
        path: '/edit-post/:slug',
        element: (
          <AuthLayout authentication>
            {" "}
            <EditPost />
          </AuthLayout>
        )
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <RouterProvider router={router}/>
  </Provider>,
)
