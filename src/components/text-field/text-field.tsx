import { ChangeEvent, useRef } from 'react'
import type { AriaTextFieldProps } from 'react-aria'
import { useTextField } from 'react-aria'

import * as S from './styles'

type TextFieldProps = {
  onChange(e: ChangeEvent<HTMLInputElement>): void
  inputElementType?: any
} & Omit<AriaTextFieldProps, 'onChange'>

export const TextField = ({ onChange, inputElementType = 'input', ...props }: TextFieldProps) => {
  const { label } = props
  const ref = useRef(null)
  const { labelProps, inputProps } = useTextField({
    ...props,
    inputElementType,
  }, ref)

  return (
    <S.TextFieldWrapper>
      <S.Label {...labelProps}>{label}</S.Label>

      <S.Input
        as={inputElementType}
        {...inputProps}
        ref={ref}
        onChange={onChange}
      />
    </S.TextFieldWrapper>
  )
}
