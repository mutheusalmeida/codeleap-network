import { BaseModal } from '@/components/base-modal'
import { useModal } from '@/hooks/use-modal'
import { Input, InputWrapper, Label, Title } from '@/style'
import { BaseButton } from '@/components/base-button'
import { ChangeEvent, FormEvent, useState } from 'react'

import * as S from './styles'

export const Login = () => {
  const { ref: loginModalRef } = useModal()
  const [formData, setFormData] = useState({
    username: '',
  })

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(formData)
  }

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <BaseModal
      ref={loginModalRef}
      defaultOpen
      hasOverlay={false}
      closeOnOutsideClick={false}
    >
      <S.LoginForm
        onSubmit={handleFormSubmit}
      >
        <Title id='modal-title' tabIndex={0}>Welcome to CodeLeap network!</Title>

        <InputWrapper>
          <Label htmlFor='username'>Please enter your username</Label>

          <Input
            id='username'
            name='username'
            type='text'
            placeholder='John Doe'
            value={formData.username}
            onChange={handleFormChange}
          />
        </InputWrapper>

        <S.LoginBtnWrapper>
          <BaseButton
            type='submit'
            disabled={!formData.username}
          >
            Enter
          </BaseButton>
        </S.LoginBtnWrapper>
      </S.LoginForm>
    </BaseModal>
  )
}
