import { BaseModal } from '@/components/base-modal'
import { useModal } from '@/hooks/use-modal'
import { Input, InputWrapper, Label, Title } from '@/style'
import { BaseButton } from '@/components/base-button'
import { ChangeEvent, FormEvent, useState } from 'react'
import localforage from 'localforage'
import { loading } from '@/resources/utils/loading'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

export const Login = () => {
  const { ref: loginModalRef } = useModal()
  const [formData, setFormData] = useState({
    username: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      setIsLoading(true)
      await localforage.setItem('token', formData.username)
      await loading(2)
    } catch {
      console.log('error')
    } finally {
      setIsLoading(false)
      navigate('home')
    }
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
            isLoading={isLoading}
          >
            Enter
          </BaseButton>
        </S.LoginBtnWrapper>
      </S.LoginForm>
    </BaseModal>
  )
}
