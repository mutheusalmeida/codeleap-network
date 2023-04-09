import { BaseModal } from '@/components/base-modal'
import { useModal } from '@/hooks/use-modal'
import { Input, InputWrapper, Label, Title } from '@/style'
import { BaseButton } from '@/components/base-button'
import { FormEvent } from 'react'

import * as S from './styles'

export const Login = () => {
  const { ref: loginModalRef } = useModal()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    console.log('hi')
  }

  return (
    <BaseModal
      ref={loginModalRef}
      defaultOpen
      hasOverlay={false}
    >
      <S.LoginForm
        onSubmit={handleSubmit}
      >
        <Title>Welcome to CodeLeap network!</Title>

        <InputWrapper>
          <Label htmlFor='username'>Please enter your username</Label>

          <Input
            id='username'
            name='username'
            type='text'
            placeholder='John Doe'
          />
        </InputWrapper>

        <S.LoginBtnWrapper>
          <BaseButton
            type='submit'
          >
            Enter
          </BaseButton>
        </S.LoginBtnWrapper>
      </S.LoginForm>
    </BaseModal>
  )
}
