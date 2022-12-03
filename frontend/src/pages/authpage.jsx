import {Link } from 'react-router-dom'
import './page.css'


function Authpage() {
  return (
    <div className=''>
        <div className="signin">
          <input />
          <input />
          <Link to='/home'><button>SIGN-IN</button></Link>
        </div>
    </div>
  )
}

export default Authpage