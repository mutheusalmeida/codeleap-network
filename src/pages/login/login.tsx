import { Input, InputWrapper, Label, Title } from '@/style'
import { BaseButton } from '@/components/base-button'
import { ChangeEvent, FormEvent, useState } from 'react'
import { loading } from '@/resources/utils/loading'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/hooks/use-app-dispatch'
import { setUser } from '@/redux/slices/user-slice'
import { useAppSelector } from '@/hooks/use-app-selector'
import { Modal } from '@/components/modal'
import { useOverlayTrigger } from 'react-aria'
import useModal from '@/hooks/use-modal'

import * as S from './styles'

export const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { isAuthenticated } = useAppSelector(state => state.user.user)
  const location = useLocation()
  const state = useModal({ isCurrentlyOpen: true })
  const { overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
  )

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      setIsLoading(true)
      await loading(2)
      dispatch(setUser({ username: formData.username, isAuthenticated: true }))
    } catch {
      console.log('error')
    } finally {
      setIsLoading(false)
      navigate('/home')
    }
  }

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  if (isAuthenticated) {
    return <Navigate to='/home' state={{ from: location }} replace />
  }

  return (
    <Modal
      aria-labelledby='modal-title'
      state={state}
      hasOverlay={false}
      isKeyboardDismissDisabled
      {...overlayProps}
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
    </Modal>
  )
}
