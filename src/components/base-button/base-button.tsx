import { ReactNode } from 'react'
import { BaseButtonStyleType } from 'base-button'
import { Spinner } from '../spinner'

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
  disabled = false,
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
      {isLoading
        ? (
          <Spinner width={16} height={16} color='var(--white)' />
          )
        : (
          <>{children}</>
          )}
    </S.BaseButtonWrapper>
  )
}
