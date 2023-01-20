import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'

const MainLayout = () => {
  return (
    <div className="main__layout-container">

        {/** Header section */}
        <div className="header__container">

          <Header/>
        </div>

        {/** Main content Outlet */}
        <div className="main__content-container">
            
            <Outlet/>

        </div>
    </div>
  )
}

export default MainLayout