import { HeaderContainer, ActionContainer, Localization, Cart } from './styles'

import Logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useShop } from '../../hooks/useShop'

export const Header = () => {
  const { ShopQuantity } = useShop()
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="Logo" />
      </NavLink>
      <ActionContainer>
        <Localization>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Localization>

        <Cart to="/checkout">
          {ShopQuantity >= 1 && <span>{ShopQuantity}</span>}
          <ShoppingCart size={22} weight="fill" />
        </Cart>
      </ActionContainer>
    </HeaderContainer>
  )
}
