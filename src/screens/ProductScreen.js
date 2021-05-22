import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props) {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { products, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {};
  }, []);

  const handleAddToCart = () => {
    props.history.push('/cart' + props.match.params.id + '?qty' + qty);
  };
  return (
    <div>
      <div className='back-to-result'>
        <Link to={'/'}>Back to Results</Link>
      </div>

      {loading ? (
        <div>Product Loading... </div>
      ) : error ? (
        <div>{error} </div>
      ) : (
        <div className='details'>
          <div className='details-image'>
            <img src={products.image} alt=' loading'></img>
          </div>

          <div className='details-info'>
            <ul>
              <li>
                <h4>{products.name}</h4>
              </li>
              <li>
                {products.rating} Stars {products.numReview} Reviews
              </li>
              <li>
                Price: <b> ${products.price}</b>
              </li>
              <li>
                Description:
                <div>{products.description}</div>
              </li>
            </ul>
          </div>

          <div className='details-action'>
            <ul>
              <li>Price : {products.price}</li>
              <li>
                Status: {products.countInStock ? 'In Stock' : 'Out of Stock'}
              </li>
              <li>
                Qty:
                <select
                  value={qty}
                  onChange={(e) => {
                    setQty(e.target.value);
                  }}
                >
                  {[...Array(products.countInStock).keys()].map((x) => (
                    <option value={x + 1}>{x + 1}</option>
                  ))}
                </select>
              </li>
              <li>
                {products.countInStock > 0 && (
                  <button className='add-cart-button' onClick={handleAddToCart}>
                    Add to Cart
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductScreen;
