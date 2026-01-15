import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import { setProducts, setSearchTerm } from '../redux/productSlice';
import useFetchProducts from '../hooks/useFetchProducts';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, searchTerm } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { data, loading, error } = useFetchProducts(); // Custom hook for fetching

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data)); // Store in Redux
    }
  }, [data, dispatch]);

  useEffect(() => {
    // Filter products based on search term
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [products, searchTerm]);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="product-list">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
      <div className="products">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;