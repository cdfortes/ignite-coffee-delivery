import { HeaderContainer, ActionContainer, Localization, Cart } from './styles'

import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useShop } from '../../hooks/useShop'

export const Header = () => {
  const { ShopQuantity } = useShop()
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <ActionContainer>
        <Localization>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Localization>
        <Cart>
          {ShopQuantity >= 1 && <span>{ShopQuantity}</span>}
          <ShoppingCart size={22} weight="fill" />
        </Cart>
      </ActionContainer>
    </HeaderContainer>
  )
}
