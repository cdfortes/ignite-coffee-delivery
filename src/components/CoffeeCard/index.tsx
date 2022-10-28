import { moneyFormat } from '../../utils/moneyFormat'
import { QuantityInput } from '../QuantityInput'
import {
  CoffeeCardContainer,
  Tags,
  CoffeeCardFooter,
  AddCartWrapper
} from './styles'

import { useState } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { useShop } from '../../hooks/useShop'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export const CoffeeCard = ({ coffee }: CoffeeProps) => {
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  const { addCoffeeToShop } = useShop()

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity
    }
    addCoffeeToShop(coffeeToAdd)
  }
  const priceFormatted = moneyFormat(coffee.price)
  return (
    <CoffeeCardContainer>
      <img src={coffee.photo} alt={coffee.name} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <CoffeeCardFooter>
        <span>{priceFormatted}</span>
        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
