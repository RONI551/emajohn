import React from 'react';
import { useHistory } from 'react-router-dom';
import useProducts from '../../Hooks/ueproduct';
import UseCart from '../../Hooks/UseCart';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
   const [products, setProducts]= useProducts()
   const [cart, setCart] = UseCart(products);
   const history = useHistory()
   
   const handelRemove = key =>{
      const newCart = cart.filter(product=>product.key !== key)
      setCart(newCart)
      deleteFromDb(key)

   };

   const  handlePlaceOrder = () =>{
   history.push('/Placeorder')
   setCart([])
   clearTheCart();
   };

    return (
        <div className='shop-container'>
        <div className="product-container">
         {
             cart.map(products=><ReviewItem 

                key={products.key}
                products={products}
                handelRemove={handelRemove}
                
                ></ReviewItem>)
         }
        
        </div>

         <div className='cart-container'> <Cart cart={cart}>
         <button onClick={handlePlaceOrder} className='btn-regular'>place order</button>
          </Cart>
        
          </div>
        </div>
    );
};

export default OrderReview;