import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

export function useShop() {
  const context = useContext(ShopContext)
  return context
}
