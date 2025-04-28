import './Layout.css'
import Navbar from '../Components/Navbar/Navbar.jsx'
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className='main-content'>
        <Navbar/>
        <Outlet/>
      </div>
    </>
  )
}

export default Layout;
