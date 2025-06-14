import { NavLink } from 'react-router-dom'
import { FaHome, FaPlus, FaTags, FaInfoCircle } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <NavLink to="/" className="nav-item">
        <FaHome /> Home
      </NavLink>
      <NavLink to="/fragment" className="nav-item">
        <FaPlus /> New
      </NavLink>
      <NavLink to="/tags" className="nav-item">
        <FaTags /> Tags
      </NavLink>
      <NavLink to="/info" className="nav-item">
        <FaInfoCircle /> Info
      </NavLink>
      <ThemeToggle />
    </nav>
  )
}

export default Sidebar
