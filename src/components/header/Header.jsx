import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { RxCross2 } from 'react-icons/rx'
import { TiSocialFacebook, TiSocialTwitter } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="header__social-icons">
            <TiSocialFacebook/>
            <TiSocialTwitter/>
        </div>
        <div className="header__title">
            <h1>Tag <span>B</span>log</h1>
        </div>
        <div className="toggle__mobile-menu">
            <AiOutlineMenu/>

        </div>
        <nav className="header__mobile-nav">
            <div className="toogle__mobile-menu-close">
                <RxCross2 />
            </div>
            <ul>
                <NavLink className="header__navlink" to='/'>Home</NavLink>
                <NavLink className="header__navlink" to='/account'>Account</NavLink>
                <NavLink className="header__navlink" href="#">Logout</NavLink>
            </ul>
        </nav>
        <nav className="header__mobile-nav">
            <div className="toogle__mobile-menu-close">
                <RxCross2 />
            </div>
            <ul>
                <NavLink className="header__navlink" to='/'>Home</NavLink>
                <NavLink className="header__navlink" to='/account'>Account</NavLink>
                <NavLink className="header__navlink" href="/logout">Logout</NavLink>
            </ul>
        </nav>
        <nav className="header__desktop-nav">
            
            <ul>
                <NavLink className="header__navlink" to='/'>Home</NavLink>
                <NavLink className="header__navlink" to='/account'>Account</NavLink>
                <NavLink className="header__navlink" to="/logout">Logout</NavLink>
            </ul>
        </nav>
    </header>
  )
}

export default Header