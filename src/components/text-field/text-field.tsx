import { ChangeEvent, useRef } from 'react'
import type { AriaTextFieldProps } from 'react-aria'
import { useTextField } from 'react-aria'

import * as S from './styles'

type TextFieldProps = {
  onChange(e: ChangeEvent<HTMLInputElement>): void
} & Omit<AriaTextFieldProps, 'onChange'>

export const TextField = ({ onChange, ...props }: TextFieldProps) => {
  const { label } = props
  const ref = useRef(null)
  const { labelProps, inputProps } = useTextField(props, ref)

  return (
    <S.TextFieldWrapper>
      <S.Label {...labelProps}>{label}</S.Label>

      <S.Input
        {...inputProps}
        ref={ref}
        onChange={onChange}
      />
    </S.TextFieldWrapper>
  )
}
