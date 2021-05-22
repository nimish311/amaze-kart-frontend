import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props) {
  const productDetails = useSelector((state) => state.productDetails);
  const { products, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {};
  }, []);

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
              <li> Status: {products.status}</li>
              <li>
                Qty:{' '}
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </li>
              <li>
                <button className='add-cart-button'>Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductScreen;
