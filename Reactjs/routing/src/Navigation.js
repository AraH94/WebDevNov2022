import {Link} from 'react-router-dom'
function Navigation() {
  return (
    <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
        {/* http://localhost:3000/contact */}
      </ul>
  )
}

export default Navigation