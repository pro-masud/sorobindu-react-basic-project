import { RouterProvider } from 'react-router-dom'
import './App.scss'
import router from './router/router'
import Topbar from './component/topbar/Topbar'


function App() {

  return (
    <>
      <Topbar />
      <RouterProvider router={router} />
    </>

  )
}

export default App
