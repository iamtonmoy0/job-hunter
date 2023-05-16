import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './components/ErrorPage/Error.jsx'
import { Home } from './components/Home/Home.jsx'
import { Blog } from './components/Blog/Blog.jsx'
import { Statistics } from './components/Statistics/Statistics.jsx'
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx'
import productLoader from './Loader/loader.js'
import FeaturedJobsDetails from './components/FeaturedJobs/FeaturedJobsDetails.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    
       children:[
      {
        path:'/',
        element:<Home/>,
        loader: productLoader ,
                  
         
            
      },
      {
        path:'blogs',
        element:<Blog/>,
                
      },
      {
        path:'statistics',
        element:<Statistics/>,
        
        loader:()=>fetch('AssignmentMarks.json')

      },
      {
        path:'applied-jobs',
        element:<AppliedJobs/>,
        
      },
      {
        path:'featuredjobsDetails/:id',
        element:<FeaturedJobsDetails/>,
        loader: ({params})=> fetch(`jobdata.json/${params.id}`)
        
      },
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <RouterProvider router={router} />

  </React.StrictMode>,
)
