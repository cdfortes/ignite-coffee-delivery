import { IntroBackground, IntroContainer } from './styles'

import CoffeeCup from '../../assets/Imagem.svg'

export function Home() {
  return (
    <IntroBackground>
      <IntroContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia </h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <img src={CoffeeCup} alt="" />
      </IntroContainer>
    </IntroBackground>
  )
}
