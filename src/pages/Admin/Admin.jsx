import './Admin.scss'
import { AdminUser } from '../../components/AdminUser/AdminUser'
import { HeaderAdmin } from "../../components/HeaderAdmin/HeaderAdmin.jsx";


export const Admin = () => {
    return (
        <section>
            <HeaderAdmin/>
            <AdminUser />
        </section>
    )
}