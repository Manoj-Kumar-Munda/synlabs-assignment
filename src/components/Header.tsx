import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <h2>Logo</h2>
      <nav>
        <ul>
          <li>
            <Link className="nav-link" to={"/"}>Home</Link>
          </li>
          <li>
            <Link className="nav-link" to={"/add-user"}>Add User</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
