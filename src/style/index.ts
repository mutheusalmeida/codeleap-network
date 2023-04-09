import styled from 'styled-components'

export const Title = styled.h1`
  font-size: var(--md);
`

export const Label = styled.label`
  font-size: var(--xs);
  line-height: 1.1875em;
  color: var(--dark);
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`

export const Input = styled.input`
  font-size: var(--xxs);
  height: 2.2857em;
  line-height: 2.2857em;
  color: var(--dark);
  background-color: var(--white);
  border: 1px solid var(--gray-400);
  border-radius: 0.5714em;
  padding: 0 0.8571em;
  display: flex;
  align-items: center;
  justify-content: center;

  &::placeholder {
    color: var(--gray-200);
  }
`
