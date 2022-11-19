import { LoginForm } from "../../components/LoginForm/LoginForm"
import "./style.scss"
import logo from "../../assets/Logo.png"

export const Login = () => {


    return (
        <div className="login">
            <figure className="login_containerLogo">
                <img className="login_containerLogo--img" src={logo} alt="Logo burguer queen" />
                <figcaption className="login_containerLogo--text">Burguer Queen</figcaption>
            </figure>

            <LoginForm />
        </div>
    )
}