import { ReactNode, useRef } from 'react'
import { ButtonStyleType } from 'button'
import { Spinner } from '@/components/spinner'
import { useButton } from 'react-aria'

import * as S from './styles'

type ButtonProps = {
  children: ReactNode
  type: 'button' | 'reset' | 'submit' | undefined
  handleClick?: () => void
  isLoading?: boolean
  disabled?: boolean
} & ButtonStyleType

export const Button = ({
  children,
  type,
  handleClick,
  isLoading,
  disabled = false,
  bgColor = '--primary-color',
  btnStyle = 'primary',
  textCase = 'uppercase',
  btnWidth = '7.5em',
  btnHeight = '2em',
  ...props
}: ButtonProps) => {
  const ref = useRef(null)
  const { buttonProps, isPressed } = useButton(props, ref)

  return (
    <S.ButtonWrapper
      {...buttonProps}
      type={type}
      onClick={handleClick}
      disabled={disabled}
      bgColor={bgColor}
      btnStyle={btnStyle}
      textCase={textCase}
      isPressed={isPressed}
      btnWidth={btnWidth}
      btnHeight={btnHeight}
      ref={ref}
    >
      {isLoading
        ? (
          <Spinner width={16} height={16} color='var(--white)' />
          )
        : (
          <>{children}</>
          )}
    </S.ButtonWrapper>
  )
}
