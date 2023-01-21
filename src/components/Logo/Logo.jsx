import imgLogo from "../../assets/Logo.png"

export const Logo = () => {
    return (
        <figure className="logo_container">
            <img className="logo_img" src={imgLogo} alt="Logo burguer queen" />
            <figcaption className="logo_text">Burguer Queen</figcaption>
        </figure>
    )
}