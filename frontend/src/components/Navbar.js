import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Training Tracker 🏋️</h1>
          <h3>Track Your High Intensity Sessions</h3>
        </Link>
      </div>
    </header>
  )
}

export default Navbar