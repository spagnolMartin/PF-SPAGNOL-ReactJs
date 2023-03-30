import { useEffect, useState } from "react"
import { cartSize, productExistsInCart, totalCart } from "../utils/Utils"
import { CartContext } from "./CartContext"


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        if(loadCart() == null){
            setCart([])
        }else{
            setCart(loadCart())
        }
    } ,[])

    const saveCart = () => {
        sessionStorage.setItem("cart", JSON.stringify(cart))
    }

    const loadCart = () => {
        return JSON.parse(sessionStorage.getItem('cart'));
    }

    const addProduct = (product, quantity) => {
        if(productExistsInCart(cart, product)) {
            const newCart = cart.map((prod) => {
                if(prod.productCart.name == product.name){
                    prod.quantityCart += quantity
                    return prod
                } else {
                    return prod
                }
            })
            setCart(newCart)
        } else {
            const cartItem = {
                productCart  : product,
                quantityCart : quantity
            }
            let newCart = [...cart, cartItem]
            setCart(newCart)
        } 

        saveCart()
    }

    const clearCart = () => {
        setCart([ ]);
        saveCart()
    }

    const removeProduct = (product) => {
        setCart(cart.filter(prod => prod !== product))
        saveCart()
    }

    const updateQuantity = (product, newQuantity) => {
        if(newQuantity == 0){
            removeProduct(product);
        } else {
            const newCart = cart.map((prod) => {
                if (prod.productCart.id === product.productCart.id) {
                  return {
                    ...prod,
                    quantityCart: newQuantity
                  }
                } else {
                  return prod
                }
              })
    
              setCart(newCart)
        }

        saveCart()
    }
    

    return(
        <CartContext.Provider value={{cart, addProduct, clearCart, removeProduct, updateQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;