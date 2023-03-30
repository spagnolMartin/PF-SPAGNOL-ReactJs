import { toast } from 'react-toastify'

//Categories functions
const Allcategories = (list) =>{
    return list.map(product => product.categories)
}

let categories = (list) => {
    return Allcategories(list).reduceRight((acc, item) => acc.concat(item))
}

export const uniqueCategories = (list) => {
    return Array.from(new Set(categories(list)))
}

export const productExistsInCart = (cart, product) => {
    const productsCart = cart.map(productIn => productIn.productCart)
    return productsCart.includes(product, 0)
}

export const cartSize = (cart) => {
    const cartQuantities = cart.map((product) => product.quantityCart)
    return cartQuantities.reduce((aQuantity, anotherQuantity) => aQuantity + anotherQuantity, 0)
}

export const totalCart = (cart) => {
    return cart.reduce((acc, curr) => acc + curr.productCart.price * curr.quantityCart, 0)
}

//Notifications
export const deleteProductNotification = ({product}) => toast.info(`${product.productCart.name} deleted from Cart`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

