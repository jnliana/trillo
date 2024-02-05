import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <header>
      <h1>
        <Link to={'/'}>Trillo</Link>
      </h1>
      <nav>
        <ul>
          {/* <li>
            <Link to={'/'}>Boards</Link>
          </li>
          <li>
            <Link to={'board-detail'}>Board Detail</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};
