import { useEffect, useState } from "react"
import { cartSize, productExistsInCart, totalCart } from "../utils/Utils"
import { CartContext } from "./CartContext"


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const saveCart = (list) => {
        sessionStorage.setItem('cart', JSON.stringify(list))
    }

    const loadCart = () => {
        return JSON.parse(sessionStorage.getItem('cart'));
    }

    useEffect(() => {
            if(loadCart() != null) {
                setCart(loadCart())
            }
        } ,[])
    
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
            saveCart(newCart)
            setCart(newCart)
        } else {
            const cartItem = {
                productCart  : product,
                quantityCart : quantity
            }
            let newCart = [...cart, cartItem]
            saveCart(newCart)
            setCart(newCart)
        } 
    }

    const clearCart = () => {
        setCart([]);
        saveCart([])
    }

    const removeProduct = (product) => {
        const newCart = cart.filter(prod => prod !== product)
        saveCart(newCart)
        setCart(newCart)
    }

    const updateQuantity = (product, newQuantity) => {
        if(newQuantity == 0){
            removeProduct(product);
            saveCart(cart)
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
              saveCart(newCart)
              setCart(newCart)
        }
    }
    

    return(
        <CartContext.Provider value={{cart, addProduct, clearCart, removeProduct, updateQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;