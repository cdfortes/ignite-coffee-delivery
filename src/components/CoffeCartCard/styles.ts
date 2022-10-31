import styled from 'styled-components'

export const CoffeeCartCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme['gray-400']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    img {
      width: 4rem;
      height: 4rem;
    }
  }
  > p {
    align-self: flex-start;
    font-weight: 700;
  }
`

export const ActionsContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme['gray-300']};
  font-size: 0.75rem;
  height: 100%;
  border: none;
  background: ${({ theme }) => theme['purple-500']};
  padding: 0 0.5rem;
  border-radius: 6px;
  transition: 0.4s;
  svg {
    color: ${({ theme }) => theme['gray-300']};
  }
  &:hover {
    background: ${({ theme }) => theme['gray-400']};
  }
`
