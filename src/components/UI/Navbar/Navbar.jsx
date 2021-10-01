import React from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import { MyButton } from '../button/MyButton'

export const Navbar = () => {
  const {isAuth, setIsAuth} = React.useContext(AuthContext);

  const logOut = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <header>
      <nav className="navbar">
        {
          isAuth && <MyButton onClick={logOut}>Выйти</MyButton>
        }
        <div className="navbar__links">
          <Link to="/about">
            About
          </Link>
          <Link to="/posts">
            Posts
          </Link>
        </div>
      </nav>
    </header>
  )
}
