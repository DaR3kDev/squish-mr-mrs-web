import { useState } from 'react'

import { productSchema } from '~/entities/products/model/product-schema'
import type { Product } from '~/entities/products/types/products'
import type { CartItem } from '~/features/shopping-cart/types/cart'

interface CartActionResult {
  success: boolean
  message: string
}

const isValidProductId = (productId: string): boolean => {
  return productId.trim().length > 0
}

const isValidQuantity = (quantity: number): boolean => {
  return Number.isInteger(quantity) && quantity > 0
}

const isValidProduct = (product: Product): boolean => {
  return productSchema.safeParse(product).success
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: Product): CartActionResult => {
    if (!product || !isValidProduct(product)) {
      return {
        success: false,
        message: 'No se pudo agregar el producto.',
      }
    }

    if (!isValidProductId(product.id)) {
      return {
        success: false,
        message: 'El producto no tiene un identificador válido.',
      }
    }

    const productExists = cart.some(item => item.product.id === product.id)

    if (productExists) {
      return {
        success: false,
        message: `${product.name} ya está en tu carrito.`,
      }
    }

    setCart(currentCart => [
      ...currentCart,
      {
        product,
        quantity: 1,
      },
    ])

    return {
      success: true,
      message: `${product.name} fue agregado al carrito.`,
    }
  }

  const increaseQuantity = (productId: string): void => {
    if (!isValidProductId(productId)) {
      return
    }

    setCart(currentCart =>
      currentCart.map(item => {
        if (item.product.id !== productId) {
          return item
        }

        const nextQuantity = item.quantity + 1

        if (!isValidQuantity(nextQuantity)) {
          return item
        }

        return {
          ...item,
          quantity: nextQuantity,
        }
      }),
    )
  }

  const decreaseQuantity = (productId: string): void => {
    if (!isValidProductId(productId)) {
      return
    }

    setCart(currentCart =>
      currentCart
        .map(item => {
          if (item.product.id !== productId) {
            return item
          }

          return {
            ...item,
            quantity: item.quantity - 1,
          }
        })
        .filter(item => isValidQuantity(item.quantity)),
    )
  }

  const removeFromCart = (productId: string): void => {
    if (!isValidProductId(productId)) return

    setCart(currentCart => currentCart.filter(item => item.product.id !== productId))
  }

  const clearCart = (): void => {
    setCart([])
  }

  const cartQuantity = cart.reduce((total, item) => {
    if (!isValidQuantity(item.quantity)) return total

    return total + item.quantity
  }, 0)

  const cartTotal = cart.reduce((total, item) => {
    if (!isValidProduct(item.product)) return total

    if (!isValidQuantity(item.quantity)) return total

    return total + item.product.price * item.quantity
  }, 0)

  return {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    cartQuantity,
    cartTotal,
  }
}
