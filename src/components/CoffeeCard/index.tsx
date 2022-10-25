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

interface CoffeeCardProps {
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

export const CoffeeCard = ({
  tags,
  name,
  description,
  photo,
  price
}: CoffeeCardProps) => {
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }
  const priceFormatted = moneyFormat(price)
  return (
    <CoffeeCardContainer>
      <img src={photo} alt={name} />
      <Tags>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <h3>{name}</h3>
      <p>{description}</p>
      <CoffeeCardFooter>
        <span>{priceFormatted}</span>
        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
