import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.2rem 0;
  max-width: 112rem;
  margin: 0 auto;
`

export const ActionContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`

export const Localization = styled.a`
  padding: 0.8rem;
  color: ${(props) => props.theme['purple-700']};
  background-color: ${(props) => props.theme['purple-300']};
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 6px;

  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.3;
`

export const Cart = styled.a`
  padding: 0.8rem;
  color: ${(props) => props.theme['yellow-700']};
  background-color: ${(props) => props.theme['yellow-300']};
  display: flex;
  align-items: center;

  border-radius: 6px;
`
