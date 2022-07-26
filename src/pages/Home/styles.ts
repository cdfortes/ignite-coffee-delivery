import styled from 'styled-components'

import IntroBg from '../../assets/background.svg'

type IconBgType = 'yellow-700' | 'yellow-500' | 'gray-700' | 'purple-500'

export const IntroBackground = styled.section`
  background-image: url(${IntroBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 54.4rem;
`

export const IntroContainer = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  padding: 9.4rem 0 10.8rem 0;

  display: flex;
  justify-content: space-between;
  gap: 5.6rem;

  h1 {
    font-size: 4.8rem;
    font-weight: 900;
    color: ${(props) => props.theme['gray-900']};
    line-height: 1.3;
  }

  p {
    margin-top: 1.6rem;
    font-size: 2rem;
    font-weight: normal;
    color: ${(props) => props.theme['gray-800']};
    line-height: 1.3;
  }
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 6.6rem;
`

export const ItemIntro = styled.div<{ iconBg: IconBgType }>`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  svg {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme[props.iconBg]};
    padding: 0.8rem;
    border-radius: 50%;
    width: 3.2rem;
    height: 3.2rem;
  }

  span {
    font-family: Roboto, sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-700']};
  }
`
