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

  h3 {
    font-weight: 700;
    font-size: 2rem;
    color: ${({ theme }) => theme['gray-800']};
    line-height: 1.3;
    margin-bottom: 0.8rem;
  }

  p {
    font-weight: 400;
    font-size: 1.4rem;
    color: ${({ theme }) => theme['gray-600']};
    line-height: 1.3;
    margin-bottom: 3.3rem;
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

export const CoffeeCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 29px;

  span {
    font-weight: 800;
    font-size: 2.4rem;
    line-height: 130%;
    color: ${({ theme }) => theme['gray-800']};
    font-family: ${({ theme }) => theme.fontHeader['font-family']};
  }
`

export const AddCartWrapper = styled.div`
  width: 11.8rem;
  display: flex;
  gap: 0.8rem;
  > button {
    padding: 0.8rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme['purple-700']};
    color: ${({ theme }) => theme['gray-300']};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;
    &:hover {
      background: ${({ theme }) => theme['purple-500']};
      cursor: pointer;
    }
  }
`
