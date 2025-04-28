import './Layout.css'
import Navbar from '../Components/Navbar/Navbar.jsx'
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className='main-content'>
        <Navbar />
        <DeckBuilder />
      </div>
    </>
  )
}

export default Layout;
