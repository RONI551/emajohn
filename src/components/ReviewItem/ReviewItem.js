import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, img,key } = props.products
    const {handelRemove}=props
    console.log(props.products)
    console.log(props)
    return (
        <div className='product'>


            <div>

                <img src={img} alt="" />
            </div>
            <div>

                <h4 className='product-name'>{name}</h4>
                <p>price : {price}</p>
                <p>Quantity: {quantity}</p>
                <button className='btn-regular' onClick={()=> handelRemove(key)}>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;