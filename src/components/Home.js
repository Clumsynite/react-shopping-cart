import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <div className="text-center bg-dark text-light p-4">
        <h1 className="mb-3">Shopping Cart</h1>
        <div>
          <p>This project was built in order to practice routers in React.</p>
          <p>
            To use Routers in react you'll have to use
            <a
              href="https://www.npmjs.com/package/react-router-dom"
              title="react-router-dom"
              className="link"
              rel="noreferrer"
              target="_blank"
            >
              <code>react-router-dom</code>
            </a>
            library.
          </p>
          <div className="w-75 mx-auto">
            Shopping cart currently has three routes:
            <div class="list-group mt-2">
              <Link
                to="/"
                className="list-group-item bg-dark w-50 mx-auto link"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="list-group-item bg-dark w-50 mx-auto link"
              >
                Products
              </Link>
              <Link
                to="/cart"
                className="list-group-item bg-dark w-50 mx-auto link"
              >
                Cart
              </Link>
            </div>
          </div>
          <div className="mt-3">
            You can view the <code>react-shopping-cart</code> git repository
            <a
              href="https://github.com/Clumsynite/react-shopping-cart"
              title="Link to Repo"
              rel="noreferrer"
              className="link"
              target="_blank"
            >
              here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
