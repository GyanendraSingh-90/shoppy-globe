import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa'; // Icon for cart

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="header">
        <nav>
          <Link to="/">ShoppyGlobe</Link>
          <Link to="/cart">
            <FaShoppingCart /> Cart ({totalItems})
          </Link>
        </nav>
      </header>
      <main>
        <Outlet /> {/* Renders child routes */}
      </main>
    </>
  );
};

export default Header;