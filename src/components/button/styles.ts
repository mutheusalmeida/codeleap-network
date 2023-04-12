import { ButtonStyleType } from 'button'
import styled, { css } from 'styled-components'

type ButtonWrapperType = {
  isPressed: boolean
} & ButtonStyleType

export const ButtonWrapper = styled.button<ButtonWrapperType>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ btnWidth }) => btnWidth};
  height: ${({ btnHeight }) => btnHeight};
  font-weight: 700;
  font-size: var(--xs);
  line-height: 2em;
  cursor: pointer;
  border: none;
  padding: 0 1em;
  max-width: max-content;
  border-radius: 0.5em;
  text-transform: ${({ textCase }) => textCase};
  transition: opacity ease 0.3s;

  ${({ btnStyle, bgColor }) => btnStyle === 'primary' && css`
    color: var(--white);
    background-color: var(${bgColor});
    `}

  ${({ btnStyle }) => btnStyle === 'secondary' && css`
    color: var(--dark);
    background-color: transparent;
    border: 1px solid var(--gray-300);
  `}

  ${({ btnStyle }) => btnStyle === 'icon-only' && css`
    background-color: var(--transparent);
    padding: 0;

    > svg {
      width: inherit;
      height: inherit;
      max-width: inherit;
    }
  `}

  &:disabled {
    opacity: 0.5;
    cursor: initial;
  }

  &:not(:disabled) {
    opacity: ${({ isPressed }) => isPressed ? 0.8 : 1};
    scale: ${({ isPressed }) => isPressed ? 0.991 : 1};
  }

  @media not all and (hover: none) {
    &:hover:not(:disabled) {
      opacity: 0.8;
    }
  }
`
