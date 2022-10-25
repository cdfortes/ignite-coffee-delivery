import { CoffeeCardContainer, Tags } from './styles'

interface CoffeeCardProps {
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

import coffee from '../../assets/cafeComLeite.png'
export const CoffeeCard = ({
  tags,
  name,
  description,
  photo,
  price
}: CoffeeCardProps) => {
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
      <div>
        <span>{price}</span>
      </div>
    </CoffeeCardContainer>
  )
}
