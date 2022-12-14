import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ADMIN_USERS, ADMIN_PRODUCTS, LOGIN, WAITER_MENU, WAITER_STATUS,ORDERS } from '../routes/paths'
import Logo from '../assets/Logo.png'
// import { Admin } from '../pages/Admin/Admin'
import { AdminUser } from '../components/AdminUser/AdminUser'
import { AdminProducts } from '../components/AdminProducts/AdminProducts'
import { ViewWaiterMenu } from './waiter/ViewWaiterMenu/ViewWaiterMenu'
import { ViewChefOrder } from './chef/ViewChef/ViewChefOrder'
import { Login } from '../pages/Login/Login'
import { OrderStatus } from './waiter/ViewWaiterOrder/ViewWaiterOrder'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN} element={<Login/>}/>
          {/* <Route path={ADMIN_USERS} element={<Admin/>}/> */}
          <Route path={ADMIN_USERS} element={<AdminUser/>}/>
          <Route path={ADMIN_PRODUCTS} element={<AdminProducts/>}/>
          <Route path={WAITER_MENU} element={<ViewWaiterMenu />} />
          <Route path={WAITER_STATUS} element={<OrderStatus />} />
          <Route path={ORDERS} element={<ViewChefOrder />} />
          {/* <Route path={ORDERS} element={<Orders logo={Logo}/>} /> */}
        </Routes>
      </BrowserRouter>
  )
}

export default App;
