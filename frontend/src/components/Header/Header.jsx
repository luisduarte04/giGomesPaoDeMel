import "./HeaderStyled.css"
import logo from "../../assets/logo.png"

export default function Header() {
  return (
    <header className="header">
        <div>
            <img src={logo} alt="Logo Pão de Mel da Gi" />
        </div>
        <div className="text">
            <strong>
            <h1>
              <span className="giGomes">GiGomes </span>
              <span className="paoDeMel">Pão de Mel</span>
            </h1>
            <p className="description">Produzido com amor em Embu das Artes - SP</p>
            </strong>
        </div>
    </header>
  )
}
