import styled, { css } from 'styled-components'

type InputType = {
  as: string
}

export const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`

export const Label = styled.label`
  font-size: var(--xs);
  line-height: 1.1875em;
  color: var(--dark);
`

export const Input = styled.input<InputType>`
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

  ${({ as: asEle }) => asEle === 'textarea' && css`
    height: 5.2857em;
    resize: none;
  `}

  &::placeholder {
    color: var(--gray-200);
  }
`
