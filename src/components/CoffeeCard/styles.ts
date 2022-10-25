import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme['gray-100']};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 12rem;
    height: 12rem;
    margin-top: -2rem;
  }
`

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1.2rem;
  margin-bottom: 1.6rem;
  flex-wrap: wrap;
  h3 {
    font-weight: 700;
    font-size: 20px;
    color: ${({ theme }) => theme['gray-800']};
  }

  span {
    background: ${({ theme }) => theme['yellow-300']};
    color: ${({ theme }) => theme['yellow-700']};
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0.4rem 0.8rem;
    border-radius: 999px;
    font-weight: 700;
  }
`
