import { useEffect } from "react";
import { useState } from "react"
import Product from "../components/Product/Product";
import { getStoredCart } from "../utilities/fakedb";

const useCart = Products => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (Product.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = Products.find(Product => Product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart)
    }
  }, [Products])
  return [cart, setCart];
}
export default useCart;