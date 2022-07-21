import styled from 'styled-components'

import IntroBg from '../../assets/background.svg'

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
