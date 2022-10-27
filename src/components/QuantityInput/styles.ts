import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme['gray-400']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  border-radius: 6px;

  input {
    text-align: center;
    width: 20%;
    background: none;
    border: none;
    color: ${(props) => props.theme['gray-600']};
    &:focus {
      outline: none;
    }
  }
`
export const IconWrapper = styled.button.attrs({
  type: 'button'
})`
  width: 3.8rem;
  height: 3.8rem;
  border: none;
  background: none;
  color: ${(props) => props.theme['purple-500']};
  transition: 0.4s;
  &:disabled {
    opacity: 0.4;
  }
  &:not(:disabled):hover {
    color: ${(props) => props.theme['purple-700']};
  }
`
