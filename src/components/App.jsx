import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ADMIN_USERS, ADMIN_PRODUCTS, LOGIN, MENU, ORDERS } from '../routes/paths'
import Logo from '../assets/Logo.png'
// import { Admin } from '../pages/Admin/Admin'
import { AdminUser } from '../components/AdminUser/AdminUser'
import { AdminProducts } from '../components/AdminProducts/AdminProducts'
import { Menu } from './Menu'
import { Orders } from './Orders'
import { Login } from '../pages/Login/Login'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN} element={<Login/>}/>
          {/* <Route path={ADMIN_USERS} element={<Admin/>}/> */}
          <Route path={ADMIN_USERS} element={<AdminUser/>}/>
          <Route path={ADMIN_PRODUCTS} element={<AdminProducts/>}/>
          <Route path={MENU} element={<Menu logo={Logo}/>} />
          {/* <Route path={ORDERS} element={<Orders logo={Logo}/>} /> */}
        </Routes>
      </BrowserRouter>
  )
}

export default App;
