import React from 'react';
import UseProducts from '../../hooks/UseProduct';
import useCart from '../../hooks/UseCart';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ReviewItem from '../reviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';
const OrderReview = () => {
    const [products] = UseProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handlePlaceOrder = () => {
        history.push('/placeOrder');
        setCart([]);
        clearTheCart();
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                 
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder}
                        className='btn-regular'>place order</button>
                </Cart>
            </div>

        </div>
    );
};

export default OrderReview;