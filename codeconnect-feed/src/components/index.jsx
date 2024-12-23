import Logo from "./Sidebar/assets/logo.svg";
import Feed from "./Sidebar/assets/feed.svg";
import Perfil from "./Sidebar/assets/account_circle.svg";
import Sobre from "./Sidebar/assets/info.svg";
import Sair from "./Sidebar/assets/logout.svg";
import "./Sidebar/styles.css";

export default function Sidebar() {
  return (
    <aside>
      <img src={Logo} alt="Logo do CodeConnet" />
      <nav>
        <ul className="lista-sidebar">
          <li>
            <a href="#" className="item__link-publicacao">
              Publicar
            </a>
          </li>
          <li>
            <a href="#" className="item__link item__link--ativo">
              <img src={Feed} alt="" />
              <span>Feed</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={Perfil} alt="" />
              <span>Perfil</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={Sobre} alt="" />
              <span>Sobre nós</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={Sair} alt="" />
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
