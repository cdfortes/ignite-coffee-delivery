import { Trash } from 'phosphor-react'
import { ShopItem } from '../../context/ShopContext'
import { useShop } from '../../hooks/useShop'
import { moneyFormat } from '../../utils/moneyFormat'
import { QuantityInput } from '../QuantityInput'

import {
  CoffeeCartCardContainer,
  ActionsContainer,
  RemoveButton
} from './styles'

interface CoffeeCartCardProps {
  coffee: ShopItem
}
export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeShopItemQuantity, removeShopItem } = useShop()

  function handleIncrease() {
    changeShopItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeShopItemQuantity(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeShopItem(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.quantity

  const formattedPrice = moneyFormat(coffeeTotal)

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} />
        <div>
          <h2>{coffee.name}</h2>
          <ActionsContainer>
            <QuantityInput
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
            />
            <RemoveButton type="button" onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}
