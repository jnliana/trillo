import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header>
      <h1>Trillo</h1>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Boards</Link>
          </li>
          <li>
            <Link to={'board-detail'}>Board Detail</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
