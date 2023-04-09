import { ReactNode } from 'react'
import { BaseButtonStyleType } from 'base-button'

import * as S from './styles'

type BaseButtonProps = {
  children: ReactNode
  type: 'button' | 'reset' | 'submit' | undefined
  handleClick?: () => void
  isLoading?: boolean
  disabled?: boolean
} & BaseButtonStyleType

export const BaseButton = ({
  children,
  type,
  handleClick,
  isLoading,
  disabled,
  bgColor = '--primary-color',
  btnStyle = 'primary',
  textCase = 'uppercase',
}: BaseButtonProps) => {
  return (
    <S.BaseButtonWrapper
      type={type}
      onClick={handleClick}
      disabled={disabled}
      bgColor={bgColor}
      btnStyle={btnStyle}
      textCase={textCase}
    >
      {children}
    </S.BaseButtonWrapper>
  )
}
