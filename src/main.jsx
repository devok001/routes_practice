import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './componets/Layout.jsx'
import Home from './componets/Home.jsx'
import About from './componets/About.jsx'
import Contact from './componets/Contact.jsx'
import User from './componets/User.jsx'
import githubLoader from'./Loader/GitLoader.jsx'
import GitHub from './componets/GIthub.jsx'
import Login from './componets/Login.jsx'
import Signup from './componets/Signup.jsx'
import AuthProvider, { AuthContext } from './provider/AuthProvider.jsx'
import WelcomeMsg from './componets/WelcomeMsg.jsx'
import WelcomeLoader from './Loader/WelcomeLoader.jsx'
import Profile from './componets/Profile.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//        path: "/about" ,
//       element:<About/>
//       },
//       {
//        path: "/conact" ,
//       element:<Contact/>
//       }
//     ]
//   }
// ]);



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid'  element={<User/>}/>
      <Route path='github' 
      loader={githubLoader} element={<GitHub/>}/>

     <Route path='login'  element={<Login/>}/>
     
     <Route path='signup'  element={<Signup/>}/>
     <Route path='welcome'  element={<WelcomeMsg/>}
     loader={WelcomeLoader}/>
    <Route path="profile"element={<Profile />}>
    </Route>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);

