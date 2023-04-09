import { BaseButtonStyleType } from 'base-button'
import styled, { css } from 'styled-components'

type BaseButtonWrapperType = BaseButtonStyleType

export const BaseButtonWrapper = styled.button<BaseButtonWrapperType>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 7.5em;
  height: 2em;
  font-weight: 700;
  font-size: var(--xs);
  line-height: 2em;
  cursor: pointer;
  border: none;
  padding: 0 1em;
  max-width: max-content;
  border-radius: 0.5em;
  text-transform: ${({ textCase }) => textCase};

  ${({ btnStyle, bgColor }) => btnStyle === 'primary' && css`
    color: var(--white);
    background-color: var(${bgColor});
    `}

  ${({ btnStyle }) => btnStyle === 'secondary' && css`
    color: var(--dark);
    background-color: transparent;
    border: 1px solid var(--gray-300);
  `}

  &:disabled {
    opacity: 0.5;
    background-color: var(--gray-400);
    cursor: not-allowed;
  }
`
