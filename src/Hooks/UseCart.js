import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const UseCart = products => {
    const [cart, setCart] = useState([]);
    useEffect(() => {

        if (products.length) {
            const saveCart = getStoredCart();
            const storedCard = [];
            for (const key in saveCart) {
                const addedProduct = products.find(products => products.key === key);
                if (addedProduct) {
                    //set quantity
                    const quantity = saveCart[key]
                    addedProduct.quantity = quantity
                    storedCard.push(addedProduct);
                }
            }
            setCart(storedCard)
        }

    }, [products])

    return [cart, setCart];
}
export default UseCart;