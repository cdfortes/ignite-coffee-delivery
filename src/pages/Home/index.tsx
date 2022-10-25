import {
  OurCoffesContainer,
  IntroBackground,
  IntroContainer,
  ItemIntro,
  ItemsContainer,
  CoffeeList
} from './styles'

import CoffeeCup from '../../assets/Imagem.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeeCard } from '../../components/CoffeeCard'
import { coffees } from '../../data/db'

export function Home() {
  return (
    <>
      <IntroBackground>
        <IntroContainer>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia </h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <ItemsContainer>
              <ItemIntro iconBg="yellow-700">
                <ShoppingCart size={16} weight="fill" />
                <span>Compra simples e segura</span>
              </ItemIntro>
              <ItemIntro iconBg="gray-700">
                <Package size={16} weight="fill" />
                <span>Embalagem mantém o café intacto</span>
              </ItemIntro>
              <ItemIntro iconBg="yellow-500">
                <Timer size={16} weight="fill" />
                <span>Entrega rápida e rastreada</span>
              </ItemIntro>
              <ItemIntro iconBg="purple-500">
                <Coffee size={16} weight="fill" />
                <span>O café chega fresquinho até você</span>
              </ItemIntro>
            </ItemsContainer>
          </div>
          <img src={CoffeeCup} alt="Coffee Cup" />
        </IntroContainer>
      </IntroBackground>
      <OurCoffesContainer>
        <h2>Nossos cafés</h2>
        <CoffeeList>
          {coffees.map(({ id, name, photo, description, tags, price }) => (
            <CoffeeCard
              key={id}
              name={name}
              photo={photo}
              description={description}
              tags={tags}
              price={price}
            />
          ))}
        </CoffeeList>
      </OurCoffesContainer>
    </>
  )
}
