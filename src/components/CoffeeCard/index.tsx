import { CoffeeCardContainer } from './styles'

import coffee from '../../assets/cafeComLeite.png'
export const CoffeeCard = () => {
  return (
    <CoffeeCardContainer>
      <img src={coffee} alt="" />
    </CoffeeCardContainer>
  )
}
