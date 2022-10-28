import { createContext, ReactNode, useEffect, useState } from 'react'
import { produce } from 'immer'
import { Coffee } from '../components/CoffeeCard'

export interface ShopItem extends Coffee {
  quantity: number
}

interface ShopContextType {
  ShopItems: ShopItem[]
  ShopQuantity: number
  ShopItemsTotal: number
  addCoffeeToShop: (coffee: ShopItem) => void
  changeShopItemQuantity: (
    ShopItemId: number,
    type: 'increase' | 'decrease'
  ) => void
  removeShopItem: (ShopItemId: number) => void
  cleanShop: () => void
}

export const ShopContext = createContext({} as ShopContextType)

interface ShopContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = 'coffeeDelivery:ShopItems'

export function ShopContextProvider({ children }: ShopContextProviderProps) {
  const [ShopItems, setShopItems] = useState<ShopItem[]>(() => {
    const storedShopItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
    if (storedShopItems) {
      return JSON.parse(storedShopItems)
    }
    return []
  })

  const ShopQuantity = ShopItems.length

  const ShopItemsTotal = ShopItems.reduce((total, ShopItem) => {
    return total + ShopItem.price * ShopItem.quantity
  }, 0)

  function addCoffeeToShop(coffee: ShopItem) {
    const coffeeAlreadyExistsInShop = ShopItems.findIndex(
      (ShopItem) => ShopItem.id === coffee.id
    )

    const newShop = produce(ShopItems, (draft) => {
      if (coffeeAlreadyExistsInShop < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInShop].quantity += coffee.quantity
      }
    })

    setShopItems(newShop)
  }

  function changeShopItemQuantity(
    ShopItemId: number,
    type: 'increase' | 'decrease'
  ) {
    const newShop = produce(ShopItems, (draft) => {
      const coffeeExistsInShop = ShopItems.findIndex(
        (ShopItem) => ShopItem.id === ShopItemId
      )

      if (coffeeExistsInShop >= 0) {
        const item = draft[coffeeExistsInShop]
        draft[coffeeExistsInShop].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setShopItems(newShop)
  }

  function removeShopItem(ShopItemId: number) {
    const newShop = produce(ShopItems, (draft) => {
      const coffeeExistsInShop = ShopItems.findIndex(
        (ShopItem) => ShopItem.id === ShopItemId
      )

      if (coffeeExistsInShop >= 0) {
        draft.splice(coffeeExistsInShop, 1)
      }
    })

    setShopItems(newShop)
  }

  function cleanShop() {
    setShopItems([])
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(ShopItems))
  }, [ShopItems])

  return (
    <ShopContext.Provider
      value={{
        ShopItems,
        addCoffeeToShop,
        ShopQuantity,
        changeShopItemQuantity,
        removeShopItem,
        ShopItemsTotal,
        cleanShop
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
