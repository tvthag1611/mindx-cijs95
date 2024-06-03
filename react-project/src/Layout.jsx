import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/posts">List Posts</a>
          </li>
        </ul>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
